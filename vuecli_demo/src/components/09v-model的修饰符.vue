
<template>
    <div>
      <div>
        <span>年龄</span>
        <!-- .number-把值parseFloat转数值再赋予给v-model对应的变量 -->
        <input type="number" v-model.number="age">   
      </div>
      <div>
        <span>人生格言</span>
        <!-- .trim-去除首尾两边空格 -->
        <input type="text" v-model.trim="motto">
      </div>
      <div>
        <span>个人简介</span>
        <!-- .lazy-失去焦点内容改变时（onchange事件），把内容同步给v-model的变量 -->
        <textarea v-model.lazy="intro"></textarea>
      </div>
    </div>
  
  </template>
  
  <script>
  export default {
    data(){
      return{
        age:0,
        motto:"",
        intro:"",
      }
    }
  }
  </script>
  
  <style>
  
  </style>