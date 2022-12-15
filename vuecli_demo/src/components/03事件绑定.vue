
<template>
    <div>
    <!--   <h1>{{msg}}</h1>
      <h2>{{ojb.name}}</h2>
      <h3>{{ojb.name >=18 ? '成年了' : "未成年"}}</h3> -->
  
    <!--  <a v-bind:href="url">点击去百度</a>
      <br>
      <a :href="url1">点击还去百度</a> -->
  
   <!--    <p>你要购买商品的数量：{{count}}</p>
      <button v-on:click="count=count+1">+1</button>
      <button v-on:click="addFn">+1</button>
      <button v-on:click="addCountFn(5)">+5</button> -->
  
      <a @click="one" href="http://www.baidu.com">百度</a>
      <hr>
      <a @cilck="two(10, $event)" href="#">淘宝</a>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return{
     /*    msg:'Hellow, vue',
        ojb:{
          name:"yansicheng",
          age:5,
        },*/
  
      /*   url:'http://www.baidu.com',
        url1:'http://www.baidu.com', */
  
  /*     count:1, */
      }
    },
    methods:{
     /*  addFn(){//this指向export default的{},data函数会把对象挂到当前组件对象上
        this.count++
      },
      addCountFn(num){
        this.count=this.count+num
      }, */
  
      //1.事件触发，无传值，可以直接获取事件对象
      one(e){
        console.log(1111,e)
        e.preventDefault()
      },
      two(num,e){
        console.log(1111,e)
        e.preventDefault()
      }
  
    }
  
  }
  </script>
  
  <style>
  
  </style>