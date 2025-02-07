<template>
  <div id="app">
    <Header></Header>
    <!--这里是路由的展示-->
    <router-view></router-view>

    <!--页脚这里、只有首页和搜索页才显示-->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted(){
    this.$store.dispatch('categoryList')
  }
}
</script>

<style scoped>
#app{
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
}
</style>
