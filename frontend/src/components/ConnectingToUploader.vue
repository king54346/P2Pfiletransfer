<template>
  <div class="connecting-container">
<!--    <el-spin size="large" tip="正在连接上传者..." v-if="!showTroubleshooting" />-->
    <el-card v-if="!showTroubleshooting" class="troubleshooting-card" style="width: 500px">
      <template #header>
        <span>正在连接上传者...</span>
      </template>
      <el-alert type="info" show-icon>
          点对点连接，可能需要几秒钟才能建立连接。
      </el-alert>
    </el-card>
    <div v-else style="width: 500px">
<!--      <el-spin size="large" tip="正在连接上传者..." />-->
      <el-card class="troubleshooting-card">
        <template #header>
          <span>连接遇到问题？</span>
        </template>
        <el-alert type="info" show-icon>
            点对点连接，有时候可能会遇到连接问题，常见原因包括：
        </el-alert>
        <el-space direction="vertical" style="margin-top: 10px">
          <el-alert type="warning" show-icon>
            上传者可能关闭了浏览器或网络中断。FilePizza 需上传者保持在线。
          </el-alert>
          <el-alert type="warning" show-icon>
            您的网络可能有严格防火墙或NAT设置，例如禁用UPnP。
          </el-alert>
          <el-alert type="warning" show-icon>
            某些公司或学校网络可能屏蔽了点对点连接。
          </el-alert>
        </el-space>
      </el-card>
      <return-home style="margin-top: 10px"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ReturnHome from './ReturnHome.vue'

const props = defineProps<{ showTroubleshootingAfter?: number }>()

const showTroubleshooting = ref(false)
const delay = props.showTroubleshootingAfter ?? 3000

onMounted(() => {
  setTimeout(() => {
    showTroubleshooting.value = true
  }, delay)
})
</script>

<style scoped>
.connecting-container {
  text-align: center;
  padding: 20px;
}
.troubleshooting-card {
  margin-top: 20px;
  text-align: left;
}
.mt-4 {
  margin-top: 1rem;
}
</style>