import Vue, { onUpdated } from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//注册全局指令
Vue.directive('gfocus',{
  inserted(el){
    el.focus()
  }
})

//目标：自定义指令传值
Vue.directive('color',{
  inserted(el,binding){
    console.log(binding)
    el.style.color=binding.value
  },
  update(el,binding){
    console.log(binding)
    el.style.color=binding.value
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
