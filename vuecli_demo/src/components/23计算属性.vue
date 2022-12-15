<template>
    <div>
      <p>{{num}}</p>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return{     
          a:10,
          b:20,  
      }
    },
  
    //计算属性：
    //场景：一个变量的值，需要用另一个变量计算而来
    /* 
    语法：
    computed:{
      计算属性名（）{
        return 值
      }
    } */
    computed:{
      num(){
        return this.a+1
      }
    }
  }
  </script>
  
  <style>
  
  </style>