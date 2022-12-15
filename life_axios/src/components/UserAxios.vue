<template>
  <div>
    <p>1.获取所有图书信息</p>
    <button @click="getAllFn">点击查看控制台</button>
    <p>2.查询某本书籍信息</p>
    <input type="text" placeholder="请输入要查询的书名" v-model="bName" />
    <button @click="findFn">查询</button>
    <p>3.新增图书姓名</p>
    <div>
      <input type="text" placeholder="书名" v-model="bookObj.bookname" />
    </div>
    <div>
      <input type="text" placeholder="书名" v-model="bookObj.author" />
    </div>
    <div>
      <input type="text" placeholder="书名" v-model="bookObj.publisher" />
    </div>
    <button @click="sendFn"></button>
  </div>
</template>

<script>
//目标一：获取所有图书信息
//1.下载axios
//2.引入axios
//3.发起请求
import axios from "axios";
//4.全局配置基地址(请求为url加基地址拼接)
axios.defaults.baseURl='http://123.23.23.4:3309'
export default {
  data() {
    return {
      bName: "",
      bookObj: {
        bookname: "",
        author: "",
        publisher: "",
      },
    };
  },
  methods: {
    getAllFn() {
      //发起axios请求
      axios({
        url: "",
        method: "GET", //默认GET，可以省略
      }).then((res) => {
        console.log(res);
      });
      //axios()-原地得到Promise对象
    },
    findFn() {
      axios({
        url: "",
        method: "GET",
        params: {
          //都会被拼接到url?后面
          bookname: this.bName,
        },
      }).then((res) => {
        console.log(res);
      });
    },
    sendFn() {
      axios({
        url: "",
        method: "POST",
        data: {
          appkey: "",
          ...this.bookObj,
          //等同于下面
          //bookname:this.bookObj.bookname,
          //author: this.bookObj.author
          //publisher: this.bookObj.author
        },
      });
    },
  },
};
</script>

<style></style>
