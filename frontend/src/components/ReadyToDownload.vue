<template>
  <div class="ready-to-download">
    <title-text>
      您即将开始下载 {{ filesInfo.length }} 个文件。
    </title-text>

    <div class="file-list-container">
      <upload-file-list :files="filesInfo" />
      <el-button type="primary" size="large" @click="onStart">
        开始下载
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">

import {FileInfo} from "../types";

defineProps<{
  filesInfo: FileInfo[]
}>()

const emit = defineEmits<{
  (e: 'start'): void
}>()

function onStart() {
  emit('start')
}
</script>

<style scoped>
.ready-to-download {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.file-list-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}
</style>