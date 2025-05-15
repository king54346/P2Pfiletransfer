// useWebRTC.ts
import {inject, Ref} from 'vue';
import { WebRTCKey } from './webrtcpeerProvider.vue';
import type { WebRTCPeerValue } from './webrtcpeerProvider.vue';

export function useWebRTCPeer(): WebRTCPeerValue {
    const webRTCRef = inject<Ref<WebRTCPeerValue>>(WebRTCKey);
    console.log('webRTCRef', webRTCRef);
    if (!webRTCRef || !webRTCRef.value) {
        throw new Error('useWebRTC必须在WebRTCProvider内部使用');
    }

    return webRTCRef.value;
}