<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import IconDate from './icons/IconDate.vue';

    // 定义文章类型
    interface Article {
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
        $axios.post(`/article/page`, params).then((res) => {
            articles.value = res.data;
            console.log(res.data);
        });
    };

    onMounted(() => {
        const params = {};
        pageAritcles(params);
    });
</script>

<template>
    <ul>
        <li v-for="(article, index) in articles" :key="index">
            <div class="article">
                <div class="article-info">
                    <a href="#">{{ article.title }}</a>
                    <p class="art-create-date">
                        <IconDate/>
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