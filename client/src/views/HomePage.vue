<template>
  <HeroSection />
  <Container>
    <!-- !Kategoriler -->
    <TitleComponent>
      <template #title>Kategoriler</template>
      <template #desc>Lorem ipsum dolor sit amet.</template>
      <template #grid>
        <CategoryComponent :categories="categories" />
      </template>
    </TitleComponent>

    <!--! En çok görüntülenenler -->
    <TitleComponent>
      <template #title>En Çok Görüntülenenler</template>
      <template #grid>
        <CardGrid :products="mostViewed"></CardGrid>
      </template>
    </TitleComponent>

    <!--! En çok satılanlar -->

    <TitleComponent>
      <template #category>TRANDING</template>
      <template #title>En Çok Satılanlar</template>
      <template #desc>Lorem ipsum dolor sit amet.</template>
      <template #grid>
        <CardGrid :products="mostBought"> </CardGrid>
      </template>
    </TitleComponent>
  </Container>
</template>

<script setup lang="ts">
import CardGrid from '../components/CardGrid.vue'
import TitleComponent from '../components/TitleComponent.vue'
import CategoryComponent from '../components/CategoryComponent.vue'
import { Container } from '../styled-components/containerStyledComponents'
import HeroSection from '../components/Home/HeroSectionComponent.vue'
import { ref } from 'vue'
import Product from '../utils/Product'
import Category from '../utils/Category'
import { useProductStore } from '../stores/product'
import { useCategoriesStore } from '../stores/categories'

const mostViewed = ref<Product[]>([])
const mostBought = ref<Product[]>([])
const categories = ref<Category[]>([])

mostBought.value = useProductStore().mostBought()
mostViewed.value = useProductStore().mostViewed()
categories.value = useCategoriesStore().getAllCategories()
</script>
