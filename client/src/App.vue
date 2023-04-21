<script setup lang="ts">
import { useProductStore } from './stores/product'
import { useCategoriesStore } from './stores/categories'
import { getProductsFun, getCategoriesFun } from './utils/ApiFunc'
import { ref, onBeforeMount } from 'vue'
import Product from './utils/Product'
import Category from './utils/Category'

const categories = ref<Category[]>([])
const allProducts = ref<Product[]>([])
onBeforeMount(async () => {
  allProducts.value = await getProductsFun()
  categories.value = await getCategoriesFun()
  console.log('çalıştı')

  useCategoriesStore().categories = categories.value
  useProductStore().products = allProducts.value
})
</script>

<template>
  <Suspense>
    <RouterView />
  </Suspense>
</template>
