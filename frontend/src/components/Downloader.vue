<template>
  <div class="downloader-container">
<!--    下载完成-->
    <template v-if="isDone && filesInfo">
      <download-complete :files-info="filesInfo" :bytes-downloaded="bytesDownloaded" :total-size="totalSize" />
    </template>
    <!--   密码输入 -->
    <template v-else-if="isPasswordRequired">
      <password-entry :error-message="errorMessage" @submit="submitPassword" />
    </template>
  <!--  显示错误  -->
    <template v-else-if="errorMessage" >
      <el-alert type="error" :title="errorMessage" show-icon style="width: 400px"/>
      <return-home />
    </template>
  <!-- 下载进程 -->
    <template v-else-if="isDownloading && filesInfo">
      <download-in-progress
          :files-info="filesInfo"
          :bytes-downloaded="bytesDownloaded"
          :total-size="totalSize"
          @stop="stopDownload"
      />
    </template>
    <!-- 准备下载的文件   -->
    <template v-else-if="filesInfo">
      <ready-to-download :files-info="filesInfo" @start="startDownload" />
    </template>

    <template v-else-if="!isConnected">
      <connecting-to-uploader />
    </template>

    <template v-else>
      <Loading text="哎呀，出了点问题..." fullscreen />
    </template>
  </div>
</template>

<script setup lang="ts">
import { useDownloader } from '../hooks/useDownloader'
// 连接上传者组件
import ConnectingToUploader from './ConnectingToUploader.vue'
// 下载完成组件
import DownloadComplete from './DownloadComplete.vue'
// 下载进度组件
import DownloadInProgress from './DownloadInProgress.vue'
// 输入密码组件
import PasswordEntry from './PasswordEntry.vue'
// 开始下载组件
import ReadyToDownload from './ReadyToDownload.vue'
// 回到主页组件
import ReturnHome from './ReturnHome.vue'
import {Loading} from "@element-plus/icons-vue";

const props = defineProps<{ uploaderPeerId: string,algorithm:number }>()

const {
  filesInfo,
  isConnected,
  isPasswordRequired,
  isDownloading,
  isDone,
  errorMessage,
  submitPassword,
  startDownload,
  stopDownload,
  totalSize,
  bytesDownloaded,
} = useDownloader(props.uploaderPeerId,props.algorithm)
</script>

<style scoped>
.downloader-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>