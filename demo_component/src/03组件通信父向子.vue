<template>
    <!-- 目标：父（App.vue）->子（MyProduct.vue）分别传值进入
    需求：每此组件显示不同数据信息 
    步骤：
    1. 子组件-props-变量（准备接收）
  
  -->
    <div>
      <Product title="口水鸡" price="50" intro="开业"></Product>
      <Product title="可爱多" price="20" intro="老板跑路"></Product>
      <Product title="烤鸭" price="299" :intro="str"></Product>
    </div>
  </template>
  
  <script>
  import Product from "./components/MyProduct"
  export default {
    data(){
      return{
        str:"好吃"
      }
    },
    components:{
      //Product:Product
      Product
    }
  }
  </script>
  
  <style>
  
  </style>