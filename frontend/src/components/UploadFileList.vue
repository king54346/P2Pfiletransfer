<template>
  <el-card class="upload-file-list" shadow="hover">
    <el-scrollbar max-height="300px">
      <div class="file-list">
        <div
            v-for="(file, index) in files"
            :key="file.name || index"
            class="file-item"
        >

          <el-tooltip :content="file.name" placement="top" :show-after="500">
            <div class="file-name text-truncate">{{ file.name }}</div>
          </el-tooltip>

          <div class="file-actions">
            <el-tag size="small" type="info">{{ file.type  || 'Unknow' }}</el-tag>
            <el-button
                v-if="onRemove"
                type="danger"
                size="small"
                circle
                @click="() => onRemove(index)"
            >
              <el-icon><Close /></el-icon>
            </el-button>
          </div>

        </div>
      </div>
    </el-scrollbar>
  </el-card>
</template>

<script setup lang="ts">
import {Close} from "@element-plus/icons-vue";
import {FileInfo} from "../types";


let defineProps1 = defineProps<{
  files: FileInfo[]
  onRemove?: (index: number) => void
}>();
console.log(defineProps1.files)
</script>

<style scoped>
.upload-file-list {
  width: 100%;
  border-radius: 6px;
  padding: 0;
}

.file-list {
  padding: 0;
  margin: 0;
}

.file-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.file-item:last-child {
  border-bottom: none;
}

.file-name {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--el-text-color-primary);
  font-size: 14px;
}

.file-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>