<script setup>
import DefaultTheme from 'vitepress/theme'
import BusuanziCounter from '../components/BusuanziCounter.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <BusuanziCounter />
    </template>
  </Layout>
</template> 