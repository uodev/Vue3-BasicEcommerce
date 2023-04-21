<template>
  <CardGrid>
    <CardItem v-for="product in products" :key="product._id" :product="product" />
  </CardGrid>
</template>

<script setup lang="ts">
import CardItem from './CardItem.vue'
import { CardGrid } from '../styled-components/cardStyledComponents'
import Product from '../utils/Product'

defineProps<{
  products: Product[]
}>()
</script>
