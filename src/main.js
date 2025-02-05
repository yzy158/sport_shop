import Vue from 'vue'
import App from './App.vue'

//引入全局组件
import TypeNav from "@/components/TypeNav";

Vue.component(TypeNav.name,TypeNav)

//引入路由
import router from '@/router'

//引入状态管理工具
import store from '@/store';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
  
}).$mount('#app')
