<template>
    <div>
      <input type="text" @keydown.enter="enterFn">
      <hr>
      <input type="text" @keydown.esc="escFn">
    </div>
  </template>
  
  <script>
  export default {
  
    methods:{
      enterFn(){
        console.log("用户按下回车");
      },
      escFn(){
        console.log("用户按下esc键")
        console.log("https://cn.vuejs.org/v2/guide/events.html")
      }
    }
  }
  </script>
  
  <style>
  
  </style>