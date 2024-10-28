<script setup lang="ts">
    import axios from 'axios';
    import { onMounted, ref } from 'vue';
    import IconDate from './icons/IconDate.vue';
    
    const API_BASE_URL = 'http://106.52.4.171:10010';//import.meta.env.VUE_APP_API_BASE_URL;

    // 定义文章类型
    interface Article {
        id: number;
        title: string;
        insertTime: string;
        content: string;
    }

    const articles = ref<Article[]>([]);

    interface Params {
        currentPage: number;
        pageSize: number;
    }


    function pageAritcles(params: Params) {
        axios.post(`${API_BASE_URL}/article/page`, params).then((res) => {
            articles.value = res.data.data.records;
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
    <router-view></router-view>
    <ul>
        <li v-for="(article, index) in articles" :key="index">
            <div class="article">
                <div class="article-info">
                    <router-link :to="{name: 'ArticleDetail', params: {id: article.id} }">{{ article.title }}</router-link>
                    <p class="art-create-date">
                        <!-- <IconDate/> -->
                        发表于 {{ article.insertTime }}
                    </p>
                    <p class="art-content">
                        {{ article.content }}
                    </p>
                </div>
            </div>
        </li>
        <li v-if="!articles.length">
            <div class="article">
                <div class="article-info">
                    <p class="art-content">
                        你还没有开始写博客哦~
                    </p>
                </div>
            </div>
        </li>
    </ul>
</template>

<style>

.art-create-date .icon{
    font-size: 16px;
    margin-right: 3px;
    display: inline;
}

ul {
    list-style: none;
    width: 65%;
}

li {
    margin-top: 20px;
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


</style>
  