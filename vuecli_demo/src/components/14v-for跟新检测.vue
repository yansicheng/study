<template>
  <div>
    <ul>
      <li v-for="(val, index) in arr" :key="index">
        {{ val }}
      </li>
      <button @click="revBtn">数组翻转</button>
      <button @click="sliceBtn">截取前三个</button>
      <button @click="uodateBtn">更新第一个元素的值</button>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [5, 1, 3, 6, 4],
    };
  },
  methods: {
    revBtn() {
      //1.数组翻转可以让v-for更新
      this.arr.reverse();
    },
    sliceBtn() {
      //2.slice方法不会造成v-for更新
      //slice不会改变原数组
      // this.arr.slice(0,3)

      //解决v-for更新-覆盖原始数组
      let newArr = this.arr.slice(0, 3);
      this.arr = newArr;
    },
    uodateBtn() {
      //3.更新某个值的时候，v-for是检测不到的
      //this.arr[0]=1000;

      //解决-this.$set()
      //参数1：更新的目标结构
      //参数2：更新位置
      //参数3：更新值
      this.$set(this.arr, 0, 1000);
    },
  },
};
</script>

<style></style>
