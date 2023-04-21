<template>
  <StyledLink :to="'/products/' + product._id">
    <Card>
      <CardImg :src="product.image" />
      <CardContent>
        <CardTitle>{{ product.name }}</CardTitle>
        <CardDesc>{{ product.category.name }}</CardDesc>

        <CardButton>${{ product.price }}</CardButton>
      </CardContent>
    </Card>
  </StyledLink>
</template>

<script setup lang="ts">
import {
  Card,
  CardButton,
  CardContent,
  CardDesc,
  CardTitle,
  CardImg,
  StyledLink
} from '../styled-components/cardStyledComponents'
import Product from '../utils/Product'
import { PropType } from 'vue'

defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})
//TODO: tüm ürünler sayfası olacak
//TODO: hepsini api den değil app.vue da çek pinia içerisinden yap
</script>
