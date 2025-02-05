//当前文件是对api进行统一管理
import requests from "./request";

//请求尚硅谷的接口
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});