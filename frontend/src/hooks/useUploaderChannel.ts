import { ref, computed, watch, onUnmounted } from 'vue'

function generateURL(token: string): string {
    const hostPrefix =
        window.location.protocol +
        '//' +
        window.location.hostname +
        (window.location.port ? ':' + window.location.port : '')
    return `${hostPrefix}/download/${token}`
}

export function useUploaderChannel(
    uploaderPeerID: string,
    algorithm: number,
    renewInterval = 60_000,
) {
    const isLoading = ref(true)
    const error = ref<Error | null>(null)
    const data = ref<{
        token?: string;
    } | null>(null)

    const token = computed(() => data.value?.token)
    const URL = computed(() => token.value ? generateURL(token.value) : undefined)

    // 初始获取URL
    const fetchChannel = async () => {
        try {
            console.log(
                '[UploaderChannel] creating new channel for peer',
                uploaderPeerID,
            )
            isLoading.value = true
            const response = await fetch('http://localhost:3000/api/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ uploaderPeerID,algorithm }),
            })

            if (!response.ok) {
                console.error(
                    '[UploaderChannel] failed to create channel:',
                    response.status,
                )
                throw new Error('Network response was not ok')
            }

            const responseData = await response.json()
            console.log('[UploaderChannel] channel created successfully:', {
                token: responseData.token,
            })

            data.value = responseData

            error.value = null
        } catch (err) {
            console.error('[UploaderChannel] error creating channel:', err)
            error.value = err instanceof Error ? err : new Error(String(err))
        } finally {
            isLoading.value = false
        }
    }

    // 初始获取
    fetchChannel()

    // 续约逻辑
    let renewalTimeout: ReturnType<typeof setTimeout> | null = null

    const renewChannel = async () => {
        if (!token.value) return

        try {
            console.log('[UploaderChannel] renewing channel for token', token.value)
            const response = await fetch('http://localhost:3000/api/renew', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token: token.value}),
            })

            if (!response.ok) {
                console.error(
                    '[UploaderChannel] failed to renew channel',
                    response.status,
                )
                throw new Error('Network response was not ok')
            }

            console.log('[UploaderChannel] channel renewed successfully')
        } catch (err) {
            console.error('[UploaderChannel] error renewing channel:', err)
        }

        // 安排下一次续约
        renewalTimeout = setTimeout(renewChannel, renewInterval)
    }

    // 监听变化，开始续约流程
    watch(
        [() => token.value],
        ([token]) => {
            if (renewalTimeout) {
                clearTimeout(renewalTimeout)
                renewalTimeout = null
            }
            if (token) {
                console.log(
                    '[UploaderChannel] scheduling channel renewal in',
                    renewInterval,
                    'ms',
                )
                renewalTimeout = setTimeout(renewChannel, renewInterval)
            }
        },
        { immediate: true }
    )

    // 处理页面卸载
    if (typeof window !== 'undefined') {
        const handleUnload = () => {
            if (token.value) {
                console.log('[UploaderChannel] destroying channel on page unload')
                // 使用 sendBeacon 在页面卸载期间尽最大努力传递
                navigator.sendBeacon('http://localhost:3000/api/destroy', JSON.stringify({ token: token.value }))
            }
        }

        window.addEventListener('beforeunload', handleUnload)

        onUnmounted(() => {
            window.removeEventListener('beforeunload', handleUnload)
            if (renewalTimeout) {
                clearTimeout(renewalTimeout)
            }
        })
    }

    return {
        isLoading,
        error,
        token,
        URL,
    }
}