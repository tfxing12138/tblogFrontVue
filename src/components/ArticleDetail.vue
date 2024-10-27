<script setup lang="ts">
    import { ref } from 'vue';

    const articleTitle = '';
    const insertTime: Date | null = null;
    const updateTime: Date | null = null;
    const clickCount = ref(0);
</script>

<template>
    <div class="header">
        <div class="header-content">
            <h1>{{ articleTitle }}</h1>
            <p>发表于{{ insertTime }}|更新于{{ updateTime }}</p>
            <p>阅读量：{{ clickCount }}</p>
        </div>    
    </div>

    <div class="content-info">
        <div class="wrap">
            <div class="content">
                
            </div>
        </div>
    </div>

    
</template>