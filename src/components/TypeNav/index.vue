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
      <div class="sort-list">
        <div class="item" v-for="c1 in categoryList" :key="c1.categoryId">
          <h3>
            <a href="">{{ c1.categoryName }}</a>
          </h3>
          <div class="item-list">
            <div class="subitem" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
              <dl class="fore">
                <dt>
                  <a href="">{{ c2.categoryName }}</a>
                </dt>
                <dd>
                  <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                    <a href="">{{ c3.categoryName }}</a>
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
      this.$store.dispatch('categoryList')
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