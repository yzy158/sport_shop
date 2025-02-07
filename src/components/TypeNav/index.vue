<template>
  <div class="nav-container">
    <h2>分类组建----全部分类</h2>
    <nav>
      <a href="">分类1</a>
      <a href="">分类2</a>
      <a href="">分类3</a>
      <a href="">分类4</a>
    </nav>
    <div class="sort">
      <div class="sort-list" @click="goSearch">
        <div class="item" v-for="c1 in categoryList" :key="c1.categoryId">
          <h3>
            <a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{ c1.categoryName }}</a>
          </h3>
          <div class="item-list">
            <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
              <dl class="fore">
                <dt>
                  <a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{ c2.categoryName }}</a>
                </dt>
                <dd>
                  <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                    <a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{ c3.categoryName }}</a>
                  </em>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name:'TypeNav',
    mounted(){
      
    },
    methods:{
      goSearch(event){
        let element = event.target;
        console.log(element)
        let {categoryname,category1id,category2id,category3id} = element.dataset;
        //如果标签上有categoryname一定是所需要的a标签
        if (categoryname) {
          let location = {name:"search"};
          let query = {categoryName:categoryname};
          if (category1id) {
            query.category1Id = category1id;
          }else if(category2id){
            query.category2Id = category2id;
          }else{
            query.category3Id = category3id;
          }
          //整理完参数
          location.query = query;
          //进行路由跳转
          this.$router.push(location)
        }
      }
    },
    computed:{
      ...mapState({
        categoryList:state => state.home.categoryList
      })
    }
}
</script>

<style scoped>

</style>