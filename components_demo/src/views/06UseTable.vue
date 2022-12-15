<template>
  <div>
    <Mytable :arr="list"></Mytable>
    <Mytable :arr="list">
      <template v-slot="scoped">
        <a :href="scoped.row.headImgUrl">{{ scoped.row.headImgUrl }}</a>
      </template>
    </Mytable>
  </div>
</template>

<script>
import Mytable from "../components/06/MyTable.vue";
export default {
  components: {
    Mytable,
  },
  data() {
    return {
      list: [
        {
          name: "小传同学",
          age: 18,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210303/603f2d2153241.jpg",
        },
        {
          name: "小黑同学",
          age: 25,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210304/6040b101a18ef.jpg",
        },
        {
          name: "智慧同学",
          age: 21,
          headImgUrl:
            "http://yun.itheima.com/Upload/./Images/20210302/603e0142e535f.jpg",
        },
      ],
    };
  },
};
</script>

<style></style>
