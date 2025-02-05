//对于axios进行二次封装
import axios from "axios";

//引入进度条与对应样式
import nProgress from "nprogress";
import "nprogress/nprogress.css"; 

//利用axios的create方法创建实例
const requests = axios.create({
    //配置对象
    //设置基础路径为/api
    baseURL:"/api",
    //设置超时时间为5s 
    timeout:5000
})

//请求拦截器：发送请求之前可以做一些处理
requests.interceptors.request.use((config)=>{
    //进度条开始加载
    nProgress.start()
    return config;
})
//响应拦截器：接受返回的数据时可以对数据进行一些处理
requests.interceptors.response.use((res)=>{
    //返回成功的回调函数
    //进度条结束
    nProgress.done()
    return res.data;
},(error)=>{
    //返回失败的回调函数
    return Promise.reject(new Error("请求失败了"))
})


//暴露出去
export default requests;