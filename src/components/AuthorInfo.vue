<script setup lang="ts">
    import axios from 'axios';
    import { onMounted, ref } from 'vue';
    import IconNotice from './icons/IconNotice.vue';
    
    const API_BASE_URL = 'http://106.52.4.171:10010';//import.meta.env.VUE_APP_API_BASE_URL;
    
    const authorName = ref("link");
    const articleCount = ref(0);
    const articleTagCount = ref(0);
    const articleClassCount = ref(0);
    const notice = ref("欢迎来到我的博客，接下来会在这个地址更新我的日常学习笔记，生活日常还有各种有趣的事情。");
    
    interface Params {
        currentPage: number;
        pageSize: number;
    }


    function pageAritcles(params: Params) {
        axios.post(`${API_BASE_URL}/article/page`, params).then((res) => {
            articleCount.value = res.data.data.total;
            console.log(res.data.data);
            
        });
    };

    onMounted(() => {
        const params = {
            currentPage: 1,
            pageSize: 5
        };
        pageAritcles(params);
    });
</script>

<template>
    <div class="author-container">
            <div class="author-info">
                <div class="avatar-img">
                    <img src="../assets/img/avatar.jpg" alt="avatar">
                </div>
                <div class="author-name">
                    {{ authorName }}
                </div>
                <div class="article-right-info">
                    <a href="#">
                        <div class="article-title">
                            文章
                        </div>
                        <div class="article-count">
                            {{ articleCount }}
                        </div>
                    </a>
                    <a href="#">
                        <div class="article-tag-title">
                            标签
                        </div>
                        <div class="article-tag-count">
                            {{ articleTagCount }}
                        </div>
                    </a>
                    <a href="#">
                        <div class="article-class-title">
                            分类
                        </div>
                        <div class="article-class-count">
                            {{ articleClassCount }}
                        </div>
                    </a>
                </div>
                <div class="personal">
                    <a class="contact-me" href="#">联系我</a>
                    <a class="about-me" href="#">关于我</a>
                </div>
            </div>
            <div class="notice">
                
                <span class="notice-title"><IconNotice/>公告</span>
                <span class="notice-content">{{ notice }}</span>
            </div>
        </div>
</template>

<style scoped>

.author-container {
    width: 300px;
    height: 100%;
}

.article {
    font-family: 'alipuhui';
    width: 100%;
    height: 160px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    overflow: hidden;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 20px;
    margin-top: 40px;
}

.article-right-info {
    width: 80%;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto 10px auto;
}

.article-right-info a{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #000000;
    margin-left: 5px;
    transition: transform 0.2s;
}

.article-right-info a:first-child {
    margin-left: 0;
}

.article-right-info a>div:nth-child(2) {
    margin-top: 5px;
    font-size: 25px;
}

.article-right-info a>div:nth-child(1) {
    font-size: 12px;
}

.article-right-info a {
    width: 80px;
    height: 40px;
    padding-bottom: 8px;
    border-radius: 5px;
}

.article-right-info a:hover {
    color: #fff; /* 确保文字颜色独立 */
    background-color: #f8d7b7;
    opacity: 1; /* 保持文字完全不透明 */
    backdrop-filter: blur(5px); /* 添加背景模糊效果 */
    -webkit-backdrop-filter: blur(5px); /* 兼容性处理 */
    transform: scale(1.2); /* 悬浮时放大1.1倍 */
}



.article:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.article a {
    font-size: 25px;
    margin: 0;
    color: black;
}

.article .art-create-date {
    font-size: 10px;
    margin-top: 15px;
}

.article .art-content {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 10px;
    color: #64676b;
    font-size: 14px;
}


.notice-content {
    font-family: 'alipuhui';
    padding-bottom: 6px;
    font-size: 12px;
    text-align: left; /* 向左对齐 */
    margin: 0; /* 去掉默认的 margin */
    display: block; /* 确保每个内容在新行上 */
}

.notice-title {
    font-family: 'alipuhui';
    font-size: 18px;
    text-align: left;
    margin: 0;
    display: block;
}

.notice {
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    width: 270px;
    height: 150px;
    overflow: hidden;
    line-height: 20px;
    margin-top: 60px;
    padding: 20px;
    box-sizing: border-box;
}

.notice:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.notice>span{
    display: block;
}

.notice>span:nth-child(1) {
    margin-bottom: 20px;
}

.notice>span:nth-child(2) {
    text-indent: 2em;
}

.notice>span>.icon {
    font-size: 20px;
}

.author-info {
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    width: 270px;
    height: 320px;
    overflow: hidden;
    line-height: 20px;
    margin-top: 56px;
    position: relative;
}

.author-info:hover{
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.avatar-img {
    width: 120px;
    height: 120px;
    transition: all 0.5s ease;
    border: 5px solid #fae4cd;
    border-radius: 50%;
    margin: 20px auto 8px auto;
    overflow: hidden;
    display: block;
}

.avatar-img img {
    width: 100%;
    height: 100%;
}

/* .avatar-img:hover {
    transform: rotate(180deg);
} */

.author-name {
    font-family: 'alipuhui';
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.2em;
    display: flex;
    justify-content: center;
    margin: 20px 0 5px 0;
}

.autor-info:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.personal {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 55%;
    margin: 0 auto;
}

.contact-me{
    border: 1px solid #000000;
    border-radius: 5px;
    padding: 3px;
    font-size: 14px;
    width: 50px;
    text-align: center;
    color: #fff;
    background-color: #000000;
}

.contact-me:hover{
    /* box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); */
    background-color: #f8d7b7;
    border: 1px solid #f8d7b7;
}

.about-me{
    border: 1px solid #000000;
    border-radius: 5px;
    padding: 3px;
    font-size: 14px;
    width: 50px;
    text-align: center;
    color: #000000;
    background-color: #fff;
}

.about-me:hover{
    background-color: #f8d7b7;
    border: 1px solid #f8d7b7;
    color: #fff;
}

.art-create-date>.icon{
    font-size: 16px;
    margin-right: 3px;
}
</style>