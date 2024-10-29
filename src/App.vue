<script setup lang="ts">
import HomeHeader from './components/HomeHeader.vue';
import Article from './components/Article.vue';
import AuthorInfo from './components/AuthorInfo.vue'
import BackTop from './components/BackTop.vue';
</script>

<template>
  <!-- <HomeHeader/> -->
  <RouterView />
  <!-- <div id="content">
    <div class="wrap">
      <Article/>

      <AuthorInfo/>
    </div>
    
    <BackTop/>
  </div> -->
</template>

<style scoped>

  .back-icon{
    position: fixed;
    right: 30px;
    bottom: 30px;
    z-index: 999;
  }
  
  #content{
    height: 100vh;
    width: 100%;
  }

  .wrap {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
</style>
