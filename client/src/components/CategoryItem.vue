<template>
  <Card>
    <CardImg :src="category.categoryImage" />
    <CardContent>
      <CardTitle>{{ category.name }}</CardTitle>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardContent, CardTitle, CardImg } from '../styled-components/cardStyledComponents'
import Category from '../utils/Category'
defineProps<{
  category: Category
}>()
</script>
