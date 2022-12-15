<template>
  <router-view v-slot="{ Component }" :key="refreshKey">
    <transition name="fade-slide" mode="out-in" appear>
      <keep-alive :include="tabNameList">
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    refreshKey: String,
  },
  computed: {
    tabNameList() {
      return this.$store.layoutTabsSetting.tabNameList
    },
  },
}
</script>

<style scoped lang="scss">
@import url('@/assets/style/transition.scss');
</style>
