import { ref } from 'vue'
import { defineStore } from 'pinia'
import Product from '../utils/Product'
export const useProductStore = defineStore('products', () => {
  const products = ref<Array<Product>>([])

  function getAllProducts() {
    return products.value
  }
  function mostBought() {
    return products.value.sort((a, b) => (b.bought > a.bought ? 1 : -1)).slice(0, 4)
  }
  function mostViewed() {
    return products.value.sort((a, b) => (b.viewed > a.viewed ? 1 : -1)).slice(0, 4)
  }

  return { products, getAllProducts, mostBought, mostViewed }
})
