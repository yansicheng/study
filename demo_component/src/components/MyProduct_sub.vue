<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price }}元</p>
    <p>{{ intro }}</p>
    <button @click="kanFn">砍价</button>
  </div>
</template>

<script>
//目标：跨组件传值
//1.引入空白vue对象（EventBus）
//2.接收方-$on监听事件
import eventBus from "../EventBus";
export default {
  props: ["index", "title", "price", "intro"],
  methods: {
    kanFn() {
      //错误：
      //1.子组件改变父传入的数据不通知父亲，造成数据的不一致性
      //2.vue规定props"本身"只读的（不允许重新赋值）
      //this.price=this.price-1;

      //this.$ emit()规定方法-主动触发事件
      // this.$emit("subprice",this.index,1)

      //跨组件传输
      eventBus.$emit("send", this.index, 1);
    },
  },
};
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
