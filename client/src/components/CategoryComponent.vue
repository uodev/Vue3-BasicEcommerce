<template>
  <Carousel :items-to-show="4.8">
    <Slide v-for="category in categories" :key="category.id">
      <CategoryItem :category="category" />
    </Slide>
  </Carousel>
</template>

<script setup lang="ts">
import { Slide, Carousel } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import CategoryItem from './CategoryItem.vue'
import Category from '../utils/Category'

defineProps<{
  categories: Category[]
}>()
</script>
