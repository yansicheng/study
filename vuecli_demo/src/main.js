import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
Vue.config.productionTip = false//在控制台有一句消息提醒

//方式1：全局-过滤器
//任意的.vue文件内“直接”使用
//语法：vue.filter(“过滤器名”,值=>处理结果)
//Vue.filter("reverse",val=>val.split("").reverse().join(""))
//过滤器接参数
Vue.filter("reverse",(val,s)=>{
  return val.split("").reverse().join(s)
})


new Vue({//实例化vue
  render: h => h(App),//准备渲染App页面
}).$mount('#app')//渲染到index.html文件里id叫app的标签  
