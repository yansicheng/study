<template>
  <div>
    <el-button type="primary" @click="loginSubmit">登录</el-button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { ROLES, TOKEN } from '@/constant'
import { useSessionStorage } from '@hooks/useCommon'
import { useRouter } from '@hooks/useVue'

export default defineComponent({
  name: 'login',
})
</script>

<script setup>
const useSession = useSessionStorage()
const router = useRouter()

const loginSubmit = () => {
  useSession.setItem(TOKEN, '1111')
  useSession.setItem(ROLES, 1)
  router.replace({ path: '/' })
}
</script>

<style scoped lang="scss"></style>
