<script setup>
import DefaultTheme from 'vitepress/theme'
import BusuanziCounter from '../components/BusuanziCounter.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #nav-bar-title-after>
      <BusuanziCounter />
    </template>
  </Layout>
</template> 