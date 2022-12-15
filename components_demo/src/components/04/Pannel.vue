<template>
  <div>
    <!-- 按钮标题 -->
    <div class="title">
      <slot name="title"></slot>

      <span class="btn" @click="isShow = !isShow">
        {{ isShow ? "收起" : "展开" }}
      </span>
    </div>
    <!-- 下拉内容 -->
    <div class="container" v-show="isShow">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
//具名插槽的使用
//场景：2处以上不确定的地方
//1.组件内slot占位-name属性起名
//2.使用组件，template配合v-slot:插槽名，夹着传入具体的标签
export default {
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0 1em;
}

.title h4 {
  line-height: 2;
  margin: 0;
}

.container {
  border: 1px solid #ccc;
  padding: 0 1em;
}

.btn {
  /* 鼠标改成手的形状 */
  cursor: pointer;
}

img {
  width: 50%;
}
</style>
