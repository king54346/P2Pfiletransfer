<template>
  <div class="download-in-progress">
    <title-text>
      正在下载 {{ filesInfo.length }} 个文件。
    </title-text>

    <upload-file-list :files="filesInfo" />

    <el-progress
        class="progress"
        :percentage="downloadPercentage"
        :status="isCompleted ? 'success' : 'active'"
    />

    <div class="button-container">
      <el-button type="danger" @click="emit('stop')" :loading="isStopping">
        停止下载
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import UploadFileList from "./UploadFileList.vue";
import {FileInfo} from "../types";



const props = defineProps<{
  filesInfo: FileInfo[]
  bytesDownloaded: number
  totalSize: number
}>()

const emit = defineEmits<{
  (e: 'stop'): void
}>()

// 下载进度百分比计算
const downloadPercentage = computed(() => {
  if (props.totalSize === 0) return 0
  return Math.min(
      100,
      Math.round((props.bytesDownloaded / props.totalSize) * 100),
  )
})

const isCompleted = computed(() => downloadPercentage.value >= 100)

// 可选：点击停止按钮后显示加载效果
const isStopping = ref(false)

function handleStop() {
  isStopping.value = true
  emit('stop')
}
</script>

<style scoped>
.download-in-progress {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.progress {
  width: 100%;
}

.button-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>