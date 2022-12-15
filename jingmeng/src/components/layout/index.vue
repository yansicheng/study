<script>
import LayoutContent from './layoutContent'
import LayoutHeader from './layoutHeader'
import LayoutRowMenu from './layoutMenu/rowMenu'
import { defineComponent, ref, provide } from 'vue'

export default defineComponent({
  name: 'Layout',
})
</script>

<script setup>
// 页面刷新的 key
const key = ref('0')
const refreshKey = () => {
  key.value = Date.parse(new Date().toString()).toString()
}

provide('refreshKey', refreshKey)
</script>

<template>
  <el-container class="layout">
    <el-header class="layout-header" style="height: auto">
      <LayoutHeader style="height: 6rem"></LayoutHeader>
      <LayoutRowMenu></LayoutRowMenu>
    </el-header>
    <el-main class="layout-content">
      <LayoutContent :refresh-key="key" class="views-content"></LayoutContent>
    </el-main>
  </el-container>
</template>

<style scoped lang="scss">
.layout {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;

  .layout-header {
    // flex: 0 0 11rem;
    // line-height: 5rem;
    align-items: center;
    padding: 0;
    z-index: 999;
  }

  .layout-content {
    box-sizing: border-box;
    flex: 1;
    height: 0;
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem 1rem;

    .views-content {
      height: 100%;
      overflow: hidden;
    }
  }
}
</style>
