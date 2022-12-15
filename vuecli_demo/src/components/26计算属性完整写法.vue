
<template>
    <div>
      <div>
        <span>名字：</span>
        <input type="text" v-model="full">
      </div>
    </div>
  </template>
  
  <script>
  //给计算属性赋值-需要setter
  //解决：
  
  
  /* 
   完整语法：
   computed:{
   简单写法："计算属性名(){}"}
   完整写法："计算属性名"：{
                set(){
                },
                get(){
                  return
                }*/
  export default {
    computed:{
      full:{
        //给full赋值触发set方法
        set(val){
          console.log(val)
        },
        //使用full的值触发get方法
        get(){
          return "无名氏"
        }
      }
    }
  }
  </script>
  
  <style>
  
  </style>