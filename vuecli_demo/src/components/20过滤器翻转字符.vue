
<template>
  <div>
    <p>原来的样子:{{msg}}</p>
    <!-- 过滤器使用
    语法：{{值|过滤器名字}} -->
    <p>使用翻转过滤器:{{msg | reverse}}</p>
    <p :title="msg | toUp">鼠标长停</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:'hello,Vue'
    }
  },
  //方式2（方式1在main.js，全局过滤器）
  //只能在当前vue文件中使用
  /* 语法：
     filters：{
      过滤器名字（val）{
       return 处理后的值
      }
     } */
  filters:{
    toUp(val){
      return val.toUpperCase()
    }
  }
}
</script>

<style>

</style>