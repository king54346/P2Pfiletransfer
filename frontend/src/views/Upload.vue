<script setup>
import { ref, onMounted } from 'vue';
import { greet, handle_file_upload, CompressionAlgorithm } from '../../pkg';
import {InfoFilled, UploadFilled} from "@element-plus/icons-vue";
import WebRTCPeerProvider from "../components/webrtcpeerProvider.vue";
import WebrtcpeerProvider from "../components/webrtcpeerProvider.vue";
import Uploader from "../components/Uploader.vue";

// greet('World');

// const fileInput = ref(null);
//
// onMounted(() => {
//   if (fileInput.value) {
//     fileInput.value.addEventListener('change', (event) => {
//       const file = event.target.files[0];
//       if (!file) {
//         console.error('No file selected');
//         return;
//       }
//       handle_file_upload(file, CompressionAlgorithm.Snappy);
//     });
//   } else {
//     console.error('File input element not found');
//   }
// });

const uploadedFiles = ref([])
const password = ref('')
const uploading = ref(false)

const handleDrop = (file, fileList) => {
  uploadedFiles.value = fileList.map(file => file?.raw) // 提取 raw 属性
      .filter(rawFile => rawFile instanceof File); // 确保是 File 实例
}

const handleChangePassword = (pw) => {
  password.value = pw
}

const handleStart = () => {
  uploading.value = true
}

//
const handleStop = () => {
  uploading.value = false
}

const handleCancel = () => {
  uploadedFiles.value = []
  uploading.value = false
}

// 移除
const handleRemoveFile = (index) => {
  uploadedFiles.value.splice(index, 1)
}

</script>

<template>
    <div>
      <!-- Initial State -->
      <div v-if="!uploadedFiles.length" style="width: 800px">
        <el-upload
            action=""
            :auto-upload="false"
            :on-change="handleDrop"
            multiple
            drag
        >
          <div class="el-upload__text">
            拖放文件即可开始
          </div>
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        </el-upload>
      </div>

      <!-- Confirm Upload State -->
      <div v-else-if="!uploading">
        <div class="upload-container">
          <!-- 文件表格 -->
          <el-table
              :data="uploadedFiles"
              style="width: 100%"
              :header-cell-style="{ background: '#f5f7fa', color: '#606266' }"
              size="medium"
              border
              stripe>
            <el-table-column
                prop="name"
                label="File Name"
                min-width="180"
                show-overflow-tooltip>
            </el-table-column>
            <!-- 新增文件类型列 -->
            <el-table-column label="Type" width="120" align="center">
              <template #default="{ row }">
                <!-- 通过原始文件对象获取类型 -->
                {{ row.type || 'Unknown' }}
              </template>
            </el-table-column>
            <el-table-column
                label="Actions"
                width="120"
                align="center">
              <template #default="{ row, $index }">
                <el-button
                    size="small"
                    type="link"
                    class="danger-text"
                    @click="handleRemoveFile($index)">
                  Remove
                </el-button>
              </template>
            </el-table-column>
          </el-table>

          <!-- 操作区域 -->
          <div class="action-area">
            <div class="password-container">
              <!-- 标签和提示 -->
              <div class="input-label">
                <span class="label-text">{{ 'Password (optional)' }}</span>
                <el-tooltip effect="dark" placement="top">
                  <template #content>
                    下载者必须提供此密码才能开始下载文件。<br>
                    如果您不在此处指定密码，则任何具有文件链接的下载器都可以下载它。<br>
                    它不用于加密文件，因为WebRTC的DTLS已经执行了此操作。
                  </template>
                  <el-icon><InfoFilled /></el-icon>
                </el-tooltip>
              </div>

              <!-- 输入组件 -->
              <el-input
                  v-model="password"
                  type="password"
                  show-password
                  clearable
                  placeholder="输入secret password"
                  autofocus
                  style="width: 100%"
              >
                <template #prefix>
                  <i class="el-icon-lock" style="color: var(--el-text-color-placeholder)"></i>
                </template>
              </el-input>
            </div>

            <div class="button-group">
              <el-button
                  type="primary"
                  size="medium"
                  @click="handleStart">
                Start Upload
              </el-button>

              <el-button
                  size="medium"
                  plain
                  @click="handleCancel">
                Cancel
              </el-button>
            </div>
          </div>
        </div>
      </div>

      <!-- 上传状态 -->
      <div v-else style="width: 800px">
        <webrtcpeer-provider>
          <Uploader :files="uploadedFiles" :password="password" @stop="handleStop" />
        </webrtcpeer-provider>
      </div>
    </div>
</template>

<style scoped>
.upload-container {
  width: 800px;
  margin: 20px auto;
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.action-area {
  margin-top: 24px;
  display: flex;
  align-items: end;
  justify-content: space-between;
}

.button-group {
  display: flex;
  gap: 12px;
}

.danger-text {
  color: #f56c6c;
  transition: opacity 0.2s;
}

.danger-text:hover {
  opacity: 0.8;
}

/* 调整表格行高 */
.el-table--medium td {
  padding: 12px 0;
}

/* 输入框聚焦效果 */
.el-input:deep(.el-input__inner:focus) {
  border-color: #409eff;
  box-shadow: 0 0 4px rgba(64, 158, 255, 0.2);
}

.input-label {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--el-text-color-regular);
}

.label-text {
  font-weight: 500;
}

.password-container{
  width: 300px;
}

</style>
