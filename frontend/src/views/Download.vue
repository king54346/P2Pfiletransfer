<template>
  <div class="download-page">
    <div class="content-wrapper">
      <WebRTCPeerProvider>
        <Downloader :uploader-peer-id="channel.uploaderPeerID" :algorithm="channel.algorithm" />
      </WebRTCPeerProvider>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import Downloader from '../components/Downloader.vue'
import WebRTCPeerProvider from '../components/webrtcpeerProvider.vue'

// 获取 route 对象
const route = useRoute()
const router = useRouter()


// 验证 token 参数
const isValidToken = (token: string): boolean => {
  if (!token || typeof token !== 'string') {
    return false
  }
  if (token.length < 8) {
    return false
  }
  const tokenRegex = /^[a-zA-Z0-9-_]+$/
  if (!tokenRegex.test(token)) {
    return false
  }
  // 所有检查都通过
  return true
}

// 从路由参数获取 token 并验证
const token = route.params.token as string
const tokenIsValid = isValidToken(token)


// 存储 channel 数据
const channel = ref<{ uploaderPeerID: string, algorithm:number } | null>(null)


// 使用验证结果
if (!tokenIsValid) {
  // 处理无效 token 的情况
  console.error('无效的 token')
  router.replace({ name: 'NotFound' })
} else {
  // 页面加载时获取数据
  onMounted(async () => {
    // 获取 channel(peerid,token) 数据
    const response = await fetch('http://localhost:3000/api/fetch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: token}),
    });
    const data = await response.json()
    if (!data) {
      // 如果没有找到 channel，跳转到 404 页面
      router.replace({ name: 'NotFound' })
      return
    }
    channel.value = data;
  })
}
</script>

<style scoped>
.download-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
}

.content-wrapper {
  max-width: 640px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>