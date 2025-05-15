<template>
  <div>
    <!-- Loading 状态 -->
    <div v-if="isLoading  || !token" class="loading-container">
      <el-skeleton :rows="3" animated/>
      <div>创建通道中...</div>
    </div>

    <!-- 错误状态 -->
    <el-alert
        v-else-if="error"
        :title="error.message"
        type="error"
        :closable="false"
        show-icon
    />

    <!-- 正常状态 -->
    <div v-else>
      <el-row :gutter="20">
        <!-- QR 码区域 -->
        <el-col :span="6">
          <div class="qr-container">
            <q-r-code-vue
                :value="URL || ''"
                :size="QR_CODE_SIZE"
                level="H"
            />
          </div>
        </el-col>

        <!-- URL 信息区域 -->
        <el-col :span="18">
          <el-space direction="vertical" fill style="width: 100%">
            <!-- URL -->
            <div>
              <el-text class="mb-1" type="info">短 URL</el-text>
              <el-input
                  v-model="URL"
                  readonly
                  class="input-with-copy"
              >
                <template #append>
                  <el-button @click="copyToClipboard(URL)">
                    <el-icon>
                      <DocumentCopy/>
                    </el-icon>
                  </el-button>
                </template>
              </el-input>
            </div>
          </el-space>
        </el-col>
      </el-row>

      <!-- 连接列表 -->
      <div class="connections-container">
        <el-divider/>

        <div class="header-row">
          <el-text class="connections-title" size="large">
            {{ activeDownloaders }} 正在下载, {{ connections.length }} 总计连接
          </el-text>
          <el-button type="danger" @click="handleStop">
            <el-icon>
              <CircleClose/>
            </el-icon>
            停止
          </el-button>
        </div>

        <!-- 连接项列表 -->
        <el-row
                :gutter="20"
                v-for="(conn, index) in connections"
                :key="index"
                :span="8"
                class="connection-item">

            <div style="width: 100%;">
              <el-card shadow="hover" class="connection-card">
                <div class="flex justify-between items-center mb-2">
                  <!-- 浏览器信息和状态 -->
                  <div class="flex items-center space-x-2">
                  <span class="text-sm font-medium">
                    <template v-if="conn.browserName && conn.browserVersion">
                      {{ conn.browserName }}
                      <span class="text-gray-400">v{{ conn.browserVersion }}</span>
                    </template>
                    <template v-else>
                      Downloader
                    </template>
                  </span>
                    <el-tag
                        size="small"
                        :type="getStatusType(conn.status)"
                        effect="dark"
                    >
                      {{ formatStatus(conn.status) }}
                    </el-tag>
                  </div>

                  <!-- 文件进度信息 -->
                  <div class="text-sm text-gray-500">
                    <div>
                      Completed: {{ conn.completedFiles }} / {{ conn.totalFiles }} files
                    </div>
                    <div v-if="conn.uploadingFileName && conn.status === UploaderConnectionStatus.Uploading">
                      Current file: {{ Math.round(conn.currentFileProgress * 100) }}%
                    </div>
                  </div>
                </div>

                <!-- 进度条 -->
                <el-progress
                    :percentage="calculatePercentage(conn)"
                    :stroke-width="10"
                    :status="getProgressStatus(conn.status)"
                ></el-progress>
              </el-card>
            </div>
        </el-row>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import QRCodeVue from 'qrcode.vue'
import {ref, computed, watch, onMounted, Ref} from 'vue'
import {ElMessage} from 'element-plus'
import {DocumentCopy, CircleClose, Upload, Check, Loading} from '@element-plus/icons-vue'
import {useWebRTCPeer} from "./useWebRTC";
import {UploadedFile, UploaderConnection, UploaderConnectionStatus} from '../types'
import {useUploaderConnections} from "../hooks/useUploaderConnections";
import {useUploaderChannel} from "../hooks/useUploaderChannel";


const QR_CODE_SIZE = 128

// Props
const props = defineProps({
  files: Array<UploadedFile>,
  password: String,
  onStop: Function
})

// Peer 连接
const {peer, stop} = useWebRTCPeer()

// 通道信息
const {isLoading, error, token,URL} = useUploaderChannel(peer.id)


// 管理连接
const connections = useUploaderConnections(peer, props.files, props.password)


const activeDownloaders = computed(() => {
  return connections.value?.filter(
      conn => conn.status === UploaderConnectionStatus.Uploading
  ).length ?? 0;
});


// 复制到剪贴板
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    ElMessage({
      message: '已复制到剪贴板',
      type: 'success',
      duration: 2000
    })
  }).catch(() => {
    ElMessage.error('复制失败')
  })
}

// 停止上传
const handleStop = () => {
  stop()
  props.onStop()
}


const getStatusType = (s) => {
  switch (s) {
    case UploaderConnectionStatus.Uploading:
      return 'primary'
    case UploaderConnectionStatus.Paused:
      return 'warning'
    case UploaderConnectionStatus.Done:
      return 'success'
    case UploaderConnectionStatus.Closed:
    case UploaderConnectionStatus.InvalidPassword:
      return 'danger'
    default:
      return 'info'
  }
}

// Element Plus的Progress状态映射
const getProgressStatus = (status) => {
  switch (status) {
    case UploaderConnectionStatus.Done:
      return 'success'
    case UploaderConnectionStatus.Paused:
      return 'warning'
    case UploaderConnectionStatus.Closed:
    case UploaderConnectionStatus.InvalidPassword:
      return 'exception'
    default:
      return ''
  }
}

// 计算总体进度百分比
const calculatePercentage = (conn) => {
  const { completedFiles, currentFileProgress, totalFiles } = conn
  return Math.round(((completedFiles + currentFileProgress) / totalFiles) * 100)
}


// 格式化状态文本，替换下划线为空格
const formatStatus = (status) => {
  return status.replace(/_/g, ' ')
}

// 监控活跃连接状态
watch(activeDownloaders, (newVal) => {
})
</script>

<style scoped>
.loading-container {
  width: 100%;
  padding: 20px;
}

.qr-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.connections-container {
  margin-top: 20px;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.connections-title {
  font-weight: 600;
}

.connection-item {
  margin-bottom: 10px;
}
</style>
