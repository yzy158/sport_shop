<template>
  <div class="header-container">
    <div class="header-left">
      <router-link to="/home" class="header-logo-box">
        <div class="header-logo">我是网站logo</div>
      </router-link>
      <router-link to="/login" class="header-loginbtn">点击这里前往登陆页面</router-link>
      <router-link to="/register" class="header-registerbtn">点击这里前往注册页面</router-link>
    </div>
    <div class="header-right">
      <div class="header-search-box">
        <form class="header-search-form" action="">
          <input type="text" class="header-search-input" v-model="keyword">
          <button class="header-search-button" @click="goSearch">点击进行搜索</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name:"",
 data(){
  return{
    keyword:''
  }
 },
 methods:{
  goSearch(){
    let result = this.$router.push({
      name:"search",
      params:{keyword:this.keyword},
      query:{k:this.keyword.toUpperCase()}
    })
    console.log(result)
  }
 }
}
</script>

<style scoped >
.header-container{
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-left{
  display: flex;
  width: 50%;
  gap: 20px;
  align-items: center;
}
.header-logo{
  width: 80px;
  height: 80px;
  background-color: pink;
  color: red;
}

.header-right{
  padding-right: 60px;
}
</style>