<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { marked } from 'marked';
    import { useRoute } from 'vue-router';
    import AuthorInfo from '@/components/AuthorInfo.vue';

    const articleTitle = '';
    const insertTime: Date | null = null;
    const updateTime: Date | null = null;
    const clickCount = ref(0);

    const markdownText = "# 这是一篇示例文章\n内容可以使用Markdown格式书写。";
    const htmlContent = marked.parse(markdownText);
    
    const id = ref(null);
    const route = useRoute();
    
    onMounted(() => {
        id.value = route.params.id;
    });
</script>

<template>
   <div class="article-detail-header">
        <div class="header-content">
            <h1>{{ articleTitle }}</h1>
            <p>发表于{{ insertTime }}|更新于{{ updateTime }}</p>
            <p>阅读量：{{ clickCount }}</p>
        </div>    
    </div>

    <div class="content-info">
        <div class="wrap">
            <div class="content" v-html="htmlContent">
                
            </div>

            <AuthorInfo/>
        </div>
    </div>

</template>

<style scoped>


.article-detail-header{
    width: 100%;
    height: 30vh;
    background-image: url(@/assets/img/哲风壁纸.png);
    background-position: center;
    background-size: cover;
    overflow: hidden;
}

.content-info{
    width: 100%;
    height: 70vh;
}
</style>