<script>
import { defineComponent, ref } from 'vue'
import Sidebar from './common/sidebar.vue'

import { useStore, useRoute } from '@hooks/useVue'
export default defineComponent({
  name: 'RowMenu',
})
</script>

<script setup>
const store = useStore()
const route = useRoute()

// 菜单路由信息
const menuOptions = store.state.routerSetting.sideMenuList
console.log('@@@', menuOptions)
</script>

<template>
  <div class="menuBox">
    <el-scrollbar style="width: 100%">
      <el-menu
        mode="horizontal"
        :default-active="route.path"
        router
        style="display: flex; flex-direction: row"
      >
        <Sidebar
          v-for="(item, index) in menuOptions"
          :key="index"
          :index="index.toString()"
          :item="item"
        ></Sidebar>
      </el-menu>
      <!-- <el-menu :default-active="route.path" mode="horizontal" router>
        <el-submenu index="1">
          <template slot="title">信息总览</template>
          <el-menu-item index="/controlStationOverview">集控站总览</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">信息总览1</template>
          <el-menu-item index="/substationOverview">变电站总览</el-menu-item>
        </el-submenu>
      </el-menu> -->
    </el-scrollbar>
  </div>
</template>

<style scoped lang="scss"></style>
