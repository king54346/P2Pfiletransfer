<template>
  <div>
    <el-alert
        v-if="error"
        :title="error.message"
        type="error"
        show-icon
    />

    <div v-else-if="!peerValue && !isStopped">
      <el-skeleton :rows="3" animated />
      <div class="loading-text">正在初始化WebRTC连接...</div>
    </div>

    <slot v-else-if="peerValue"></slot>
  </div>
</template>

<script lang="ts">
export const WebRTCKey = Symbol('webrtc');
</script>
<script setup lang="ts">
import {ref, provide, onMounted, computed, Ref} from 'vue';
import Peer from 'peerjs';

// provide/inject 的键

// 类型定义
export interface WebRTCPeerValue {
  peer: Peer;
  stop: () => void;
}

// 全局Peer实例
let globalPeer: Peer | null = null;

// 状态
const peerValue = ref<Peer | null>(null);
const isStopped = ref(false);
const error = ref<Error | null>(null);

// 方法
const stop = () => {
  console.log('[WebRTCProvider] 停止连接');
  globalPeer?.destroy();
  globalPeer = null;
  peerValue.value = null;
  isStopped.value = true;
};


// 计算属性，提供给子组件的值
const webRTCValue = computed<WebRTCPeerValue | null>(() => {
  if (!peerValue.value) return null;
  return {
    peer: peerValue.value as Peer,
    stop,
  };
});

// 提供WebRTC上下文
provide(WebRTCKey, webRTCValue);

// 获取或创建全局peer
async function getOrCreateGlobalPeer(): Promise<Peer> {
  if (!globalPeer) {
    // 获取ICE服务器配置
    const response = await fetch('http://localhost:3000/api/ice', {
      method: 'POST',
    });
    const { iceServers } = await response.json();
    console.log('[WebRTCProvider] ICE服务器:', iceServers);

    // 创建Peer实例
    globalPeer = new Peer({
      debug: 3,
      config: {
        iceServers,
      },
    });
  }

  // 等待Peer初始化完成
  if (globalPeer.id) {
    return globalPeer;
  }

  await new Promise<void>((resolve) => {
    const listener = (id: string) => {
      console.log('[WebRTCProvider] Peer ID:', id);
      globalPeer?.off('open', listener);
      resolve();
    };
    globalPeer?.on('open', listener);
  });

  return globalPeer;
}

// 组件挂载时初始化peer
onMounted(() => {
  getOrCreateGlobalPeer()
      .then((peer) => {
        peerValue.value = peer;
      })
      .catch((err) => {
        error.value = err;
      });
});
</script>




<style scoped>
.loading-text {
  margin-top: 16px;
  text-align: center;
  color: #909399;
}
</style>
