<template>
  <Container>
    <app-header />
    <CardGrid :products="products"></CardGrid>
  </Container>
</template>

<script setup lang="ts">
import CardGrid from '../components/CardGrid.vue'
import { Container } from '../styled-components/containerStyledComponents'
import { useProductStore } from '../stores/product'

const products = useProductStore().getAllProducts()
</script>
