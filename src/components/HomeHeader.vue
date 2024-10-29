<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import Article from '@/components/Article.vue';
  import AuthorInfo from '@/components/AuthorInfo.vue'
  import BackTop from '@/components/BackTop.vue';

  const textStages = ref([
      "/* 欢迎大家来到我的博客~ */", // 阶段1
      "/* 欢迎大家来到我的博客~ */", // 阶段1
      "/* 迎大家来到我的博~ */",     // 阶段2
      "/* 大家来到我的~ */",           // 阶段3
      "/* 家来到我~ */",             // 阶段4
      "/* 来到~ */",               // 阶段5
      "/* ~ */",           // 阶段5
      "/**/",           // 阶段5
      "//",           // 阶段5
  ]);

  const text = ref(textStages.value[0]);
  const index = ref(0);
  const direction = ref(1);
  const normalSpeed = 200;
  const fastSpeed = 100;
  let intervalId: ReturnType<typeof setInterval> | null = null;
  
  onMounted(() => {
    startAnimation(normalSpeed);
  });

  function startAnimation(speed: number) {
      // 清除已有的定时器
      if (intervalId) {
          clearInterval(intervalId);
      }
      // 设置新的定时器
      intervalId = setInterval(updateText, speed);
  }

  // 更新文本
  function updateText() {
      text.value = textStages.value[index.value];
      index.value += direction.value;

      // 当 index 达到最大值时反转方向并加快速度
      if (index.value === textStages.value.length - 1) {
          direction.value = -1;  // 递减
          startAnimation(normalSpeed);  // 设置为加快速度
      }

      // 当 index 达到最小值时反转方向并恢复正常速度
      if (index.value === 0) {
          direction.value = 1;  // 递增
          startAnimation(fastSpeed);  // 恢复正常速度
      }
  }

  function scrollToContent() {
    const contentElement = document.getElementById('content');
    if(contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<template>
    <div class="top-back">
        <a href="#">link の blog</a>
        <div class="header">
            <h1>link の blog</h1>
            <p class="animation-content" ref="animationText">{{ text }}</p>
            
            <a @click.prevent="scrollToContent">
            <svg t="1729393614238" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3349" width="200" height="200"><path d="M512 297.6a42.24 42.24 0 0 1-22.08-6.4l-256-160a41.6 41.6 0 0 1 44.16-70.4L512 207.04l233.92-146.24a41.6 41.6 0 0 1 44.16 70.4l-256 160a42.24 42.24 0 0 1-22.08 6.4z" p-id="3350" fill="#ffffff"></path></svg>  
            </a>
        </div>
    </div>
    
    <div id="content">
      <div class="wrap">
        <Article/>

        <AuthorInfo/>
      </div>
      
      <BackTop/>
    </div>
</template>

<style>

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

.header>a>.icon{
  cursor: pointer;
}

.top-back {
    width: 100%;
    height: 100vh;
    background-image: url(@/assets/img/哲风壁纸.png);
    background-position: center;
    background-size: cover;
  }
  
  .header {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .header h1 {
    font-family: 'pingfangzhuiguang';
    font-size: 80px;
    color: #fff;
    margin-bottom: 10px; /* 设置 h1 和 p 标签的上下间距 */
  }

  .header>p {
      color: #fff;
      font-family: 'alipuhui';
      letter-spacing: 0.2em;
      /* background-color: rgba(129, 170, 187, 0.7); */
      margin-top: 5px; /* 设置 h1 和 p 标签的上下间距 */
  }

  
  .top-back > a {
    font-size: 24px;
    font-family: 'pingfangzhuiguang';
    color: #fff;
    position: absolute;
    margin-top: 10px;
    margin-left: 20px;
    text-decoration: none;
    transition: all 0.4s ease;
  }

  .top-back>a:hover{
    margin-top: 9px;
    margin-left: 21px;
  }

  .icon {
    font-size: 30px;
    font-weight: bold;
    position: absolute;
    top: 55vh;
    transition: all 1.5s ease;
    animation: icon-float 1.5s ease-in-out infinite;
  }

  @keyframes icon-float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
      opacity: 0.5;
    }
    100% {
      transform: translateY(0);
    }
  }
</style>