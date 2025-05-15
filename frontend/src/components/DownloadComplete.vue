<template>
  <div>
    <h2 class="title-text">
      You downloaded {{ filesCount }}.
    </h2>
    <div class="flex-container">
      <upload-file-list :files="filesInfo" />
      <div class="progress-container">
        <el-progress
            :percentage="downloadPercentage"
            :format="percentageFormat"
            :stroke-width="10"
        />
      </div>
      <return-home />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ElProgress } from 'element-plus';
import UploadFileList from "./UploadFileList.vue";
import ReturnHome from "./ReturnHome.vue";
import {FileInfo} from "../types";


interface Props {
  filesInfo: FileInfo[];
  bytesDownloaded: number;
  totalSize: number;
}

const props = defineProps<Props>();

const filesCount = computed(() => {
  return pluralize(props.filesInfo.length, 'file', 'files');
});

const downloadPercentage = computed(() => {
  return props.totalSize > 0 ? Math.round((props.bytesDownloaded / props.totalSize) * 100) : 0;
});

const percentageFormat = (percentage: number) => {
  return `${percentage}%`;
};

function pluralize(count: number, singular: string, plural: string): string {
  return `${count} ${count === 1 ? singular : plural}`;
}
</script>

<style scoped>
.title-text {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.flex-container {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
}

.progress-container {
  width: 100%;
}
</style>
