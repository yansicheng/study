<template>
    <div>
      <p>{{msg}}</p>
      <button @click="btn">逆转世界</button>
    </div>
  </template>
  
  <script>
  export default {
  
    data(){
      return{
        msg:"hello,World"
      }
    },
    methods:{
      btn(){
        //截取字符串返回数组
        let arr =this.msg.split("")
        //翻转数组
        arr.reverse();
        //数组拼接成字符串
        this.msg=arr.join("")
      }
    }
    
  }
  </script>
  
  <style>
  
  </style>