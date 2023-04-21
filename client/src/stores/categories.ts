import { ref } from 'vue'
import { defineStore } from 'pinia'
import Category from '../utils/Category'
export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<Array<Category>>([])

  function getAllCategories() {
    return categories.value
  }

  return { categories, getAllCategories }
})
