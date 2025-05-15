<template>
  <div class="page-wrapper">
    <el-text tag="h1" size="large">
      You are uploading {{ uploadedFiles.length }} {{ uploadedFiles.length === 1 ? 'file' : 'files' }}.
    </el-text>
    <upload-file-list :files="fileListData" />
    <web-rtc-peer-provider>
      <uploader :files="uploadedFiles" :password="password" @stop="onStop" />
    </web-rtc-peer-provider>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ElText } from 'element-plus'
import WebRTCPeerProvider from './webrtcpeerProvider.vue'
import UploadFileList from './UploadFileList.vue'
import Uploader from './Uploader.vue'
import {UploadedFile} from "../types";


const props = defineProps<{
  uploadedFiles: UploadedFile[]
  password: string
}>()

const emit = defineEmits<{
  (e: 'stop'): void
}>()

const fileListData = computed(() => {
  // 处理文件列表数据
  return props.uploadedFiles.map(file => ({
    ...file,
    status: 'pending'
  }))
})

const onStop = () => {
  emit('stop')
}
</script>

<style scoped>
.page-wrapper {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
</style>