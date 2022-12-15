<template>
    <div>
      <span>全选:</span>
      <input type="checkbox" v-model="isAll"/>
      <button @click="btn">反选</button>
      <ul>
        <li v-for="(obj,index) in arr" :key="index">
          <input type="checkbox" v-model="obj.c"/>
          <span>{{obj.name}}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        arr: [
          {
            name: "猪八戒",
            c: false,
          },
          {
            name: "孙悟空",
            c: false,
          },
          {
            name: "唐僧",
            c: false,
          },
          {
            name: "白龙马",
            c: false,
          },
        ],
      };
    },
    computed:{
      isAll:{
        set(val){
          this.arr.forEach(obj=>obj.c=val)
        },
        get(){
          //every:查找数组里“不符合”条件，直接返回false
        return this.arr.every(obj=>obj.c===true)
        }
      }
    },
    methods:{
      btn(){
        this.arr.forEach(obj=>obj.c=!obj.c)
      }
    },
  };
  </script>