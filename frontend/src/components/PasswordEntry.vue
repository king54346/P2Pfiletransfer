<template>
  <el-card>
    <h2 class="mb-4">该下载需要密码</h2>
    <el-form @submit.prevent="handleSubmit">
      <el-form-item :error="errorMessage">
        <el-input
            type="password"
            v-model="password"
            placeholder="请输入密码"
            show-password
            required
        />
      </el-form-item>
      <el-button type="primary" native-type="submit">解锁下载</el-button>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ errorMessage: string | null }>()
const emits = defineEmits(['submit'])

const password = ref('')

const handleSubmit = () => {
  emits('submit', password.value)
}
</script>

<style scoped>
.mb-4 {
  margin-bottom: 1rem;
}
</style>