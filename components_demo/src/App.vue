<template>
  <div>
    <h1>1.动态dynamic组件使用</h1>
    <div>
      <UserDynamic></UserDynamic>
    </div>
    <hr />
    <h1>2.组件缓存</h1>
    <UserDynamic2></UserDynamic2>
    <hr />
    <h1>3.组件-插槽</h1>
    <UseSlot></UseSlot>
    <hr />
    <h1>4.组件-具名插槽</h1>
    <UseSlot2></UseSlot2>
    <hr />
    <h1>5.组件-作用域插槽</h1>
    <UseSlot3></UseSlot3>
    <hr />
    <h1>6.作用域插槽-使用场景</h1>
    <p>组件内的标签可以随意定义和数据的使用</p>
    <UseTable></UseTable>
    <hr />
    <h1>7.自定义指令</h1>
    <UserDirective></UserDirective>
  </div>
</template>

<script>
import UserDynamic from "./views/01UserDynamic.vue";
import UserDynamic2 from "./views/02UserDynamic.vue";
import UseSlot from "./views/03UseSlot.vue";
import UseSlot2 from "./views/04UseSlot.vue";
import UseSlot3 from "./views/05UseSlot.vue";
import UseTable from "./views/06UseTable.vue";
import UserDirective from "./views/07UserDirective.vue";
export default {
  components: {
    UserDynamic,
    UserDynamic2,
    UseSlot,
    UseSlot2,
    UseSlot3,
    UseTable,
    UserDirective,
  },
};
</script>

<style></style>
