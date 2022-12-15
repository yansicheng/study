import Vue from 'vue'
import App from './App.vue'
import Find from '@/views/Find'//@是src的绝对路径
import My from '@/views/My'
import Part from '@/views/Part'
import NotFind from '@/views/NotFind'
import Recommend from '@/views/second/Recommend'
import Ranking from '@/views/second/Ranking'
import SongList from '@/views/second/SongList'
//目标：vue-router基础使用
//1.下载vue-router(yarn add vue-router)
//2.引入
import VueRouter from 'vue-router'
//3.注册全局组件
Vue.use(VueRouter)
//4.规则数组
const routes=[
  {
    path:'/',//默认hash值路径
   redirect:'/find'//重定向到find
  //浏览器url中#后的路径被改变成/find-重新匹配规则
  },
  {
    path:'/find',
    name:'Find',
    component:Find,
    children: [
      {
        path: "recommend",
        component: Recommend
      },
      {
        path: "ranking",
        component: Ranking
      },
      {
        path: "songlist",
        component: SongList
      }
    ]
  },
  {
    path:'/my',
    name:'My',
    component:My
  },
  {
    path:'/part',
    name:'Part',
    component:Part
  },
  {
    path:'/part/:username/',//有冒号的路径代表具体要接收的值
    component:Part
  },
  //404要在最后(规则从前往后比较path)
  {
    path:'*',
    component:NotFind
  },
]
//生成路由对象
const router =new VueRouter({
  //routes是固定的key(传入规则数组)
  //routes: routes,
  routes,
  //mode:'history'//默认不写是"hash"
})
//目标：路由守卫
//场景：当你要对路由权限进行判断时
//语法：router.beforeEach((to,from,next)=>{//路由跳转先执行这里，再决定是否跳转})
//参数1：要跳转到的路由（路由对象信息）目标
//参数2：从哪里跳转的路由（路由对象信息）来源
//参数3：函数体-next()才会让路由正常的跳转切换，next(false)在原地停留，next(强制修改到另一个路由路径上去)
//如果不调用next,页面留在原地

//例子：判断用户是否登录，是否决定去'我的音乐'/my
const isLogin=false
router.beforeEach((to,from,next)=>{
  if(to.path==='/my'&&isLogin===false){
    alert('请登录')
    next(false)//阻止路由跳转
  }
  else{
    next()//正常放行
  }
})



Vue.config.productionTip = false



//6.路由对象注入到vue实例中，this可以访问到$route和$router
new Vue({
  //router是固定的key(传入规则数组)
  //router: router,
  router,
  render: h => h(App),
}).$mount('#app')
