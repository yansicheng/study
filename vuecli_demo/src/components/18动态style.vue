<template>
    <div>
      <!-- 语法：
      :style="{css属性名：值}" -->
      <p :style="{backgroundColor:colorStr}">红色</p>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return{
        colorStr:"red",
      }
    }
  }
  </script>
  
  <style>
  
  </style>