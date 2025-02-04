//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";

//使用use命令
Vue.use(VueRouter)

//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

//为了解决搜索页面重新进入所出现的问题、现在要重新对router.push方法进行封装
//1.保存原先的push方法
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

//2.重新设计一个新的push方法
VueRouter.prototype.push = function(location, resolve, reject){
    if (resolve && reject) {
        originPush.call(this,location,resolve,reject)
    }
    else {
        originPush.call(this,location,()=>{},()=>{})
    }
}

VueRouter.prototype.replace = function(location, resolve, reject){
    if (resolve && reject) {
        originReplace.call(this,location,resolve,reject)
    }
    else {
        originReplace.call(this,location,()=>{},()=>{})
    } 
}


//开始配置路由
 export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true},
        },
        {
            name:"search",
            path:"/search/:keyword?", 
            component:Search,
            meta:{show:true},
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false},
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false},
        },
        //重定向
        {
            path:"*",
            redirect:"/home"
        }
    ]
 })