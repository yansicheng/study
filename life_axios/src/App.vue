<template>
  <div>
    <div>1.生命周期</div>
    <Life v-if="isShow"></Life>
    <button @click="isShow = false">销毁组件</button>
    <hr />
    <h1>2.axios的使用</h1>
    <UseAxios></UseAxios>
    <h1>3.$refs的使用</h1>
    <More></More>
    <h1>4.$nextTick的使用场景</h1>
    <tick></tick>
  <h1>5.组件对象name属性</h1>
  <ComNameHaHa></ComNameHaHa>
  </div>
</template>

<script>
import Life from "./components/Life.vue";
import UseAxios from "./components/UserAxios.vue";
import More from "./components/More.vue";
import tick from "./components/tick.vue";
import Com from './components/Com.vue'
export default {
  data() {
    return {
      isShow: true,
    };
  },
  components: {
    Life,
    UseAxios,
    More,
    tick,
    [Com.name]:Com
    //等同于ComNameHaHa:Com
  },
};
</script>

<style></style>
