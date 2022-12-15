<template>
  <div>
    <p>1.获取原生DOM元素</p>
    <h1 id="h" ref="myH">我是一个h1</h1>
    <p>2.获取组件对象-可调用组件内一切</p>
    <Deom ref="de"></Deom>
    <p>3.vue更新Dom是异步的</p>
    <p ref="myp">{{ count }}</p>
    <button @click="btn">点击加一</button>
  </div>
</template>

<script>
import Deom from "./Child/Deom.vue";
export default {
  components: {
    Deom,
  },
  mounted() {
    console.log(document.getElementById("h"));
    console.log(this.$refs.myH);
    let deomObj = this.$refs.de;
    deomObj.fn();
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    btn() {
      this.count++; //vue检测数据更新，开启一个DOM更新队列（异步任务）
      console.log(this.$refs.myp.innerHTML); //结果还是0

      //原因：vue更新DOM异步
      //解决：this.$nextTick()
      //过程：DOM更新完会挨个触发$nextTick里的函数体
      this.$nextTick(() => {
        console.log(this.$refs.myp.innerHTML);
      });
    },
  },
};
</script>

<style></style>
