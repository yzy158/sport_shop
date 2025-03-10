import { reqCategoryList } from "@/api";

//home模块的仓库
const state = {
    categoryList:[]
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    }
};
const actions = {
    async categoryList({commit}){
        let res = await reqCategoryList();
        if (res.code == 200) {
            commit('CATEGORYLIST',res.data)
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}
