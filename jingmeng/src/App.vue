<template>
  <div id="app">
    <div class="app-wrapper">
      <router-view v-slot="{ Component }">
        <transition name="zoom-fade" mode="out-in" appear>
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import url('@/assets/style/transition.scss');
html {
  font-size: 10px;
  height: 100%;
  font-family: 'Microsoft YaHei';

  body {
    font-size: 100%;
    height: 100%;
    width: 100%;
    min-height: 70rem;
    min-width: 144rem;

    #app {
      height: 100%;
      width: 100%;
      background: url(./assets/images/layout/bg.png) no-repeat 50%;

      .app-wrapper {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
