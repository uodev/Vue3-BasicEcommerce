<template>
  <StyledContainer style="height: 100vh; background-color: #f8ede3; margin-top: 0">
    <app-header />
    <form @submit.prevent="addProduct" enctype="multipart/form-data">
      <StyledContainerFlex>
        <!--! input forms -->
        <StyledContainer>
          <StyledTitle> Ürün Ekle </StyledTitle>
          <StyledContainerFlexColumn>
            <StyledLabel for="product-name">Ürün Adı</StyledLabel>
            <StyledInput required type="text" id="product-name" v-model="userData.name" />
          </StyledContainerFlexColumn>
          <StyledContainerFlexColumn>
            <StyledLabel for="product-price">Ürün Fiyatı</StyledLabel>
            <StyledInput required type="number" id="product-price" v-model="userData.price" />
          </StyledContainerFlexColumn>
          <StyledContainerFlexColumn>
            <StyledLabel for="product-category">Ürün Kategorisi</StyledLabel>
            <StyledSelect required id="product-category" v-model="userData.category">
              <StyledOption v-for="category in categories" :key="category._id" :value="category._id"
                >{{ category.name }}
              </StyledOption>
            </StyledSelect>
          </StyledContainerFlexColumn>
          <StyledContainerFlexColumn>
            <StyledLabel for="product-desc">Ürün Açıklama</StyledLabel>
            <StyledTextArea id="product-desc" required v-model="userData.desc"></StyledTextArea>
          </StyledContainerFlexColumn>
          <StyledContainerFlexColumn>
            <StyledLabel for="product-image">Ürün Resmi</StyledLabel>
            <StyledInputFile
              type="file"
              id="product-image"
              @change="onFileChange"
              v-model="selectedFile"
              required
            />
          </StyledContainerFlexColumn>
          <StyledAddButton type="submit"> Ürünü Ekle </StyledAddButton>
        </StyledContainer>
        <!--! image -->
        <StyledContainerFlexColumn>
          <StyledImage :src="preview" v-if="preview" />
        </StyledContainerFlexColumn>
      </StyledContainerFlex>
    </form>
  </StyledContainer>
</template>

<script setup lang="ts">
import {
  StyledAddButton,
  StyledContainer,
  StyledContainerFlex,
  StyledContainerFlexColumn,
  StyledImage,
  StyledInput,
  StyledLabel,
  StyledOption,
  StyledSelect,
  StyledTextArea,
  StyledTitle,
  StyledInputFile
} from '../styled-components/addProductStyled'

import Product from '../utils/Product'
import Category from '../utils/Category'
import { useCategoriesStore } from '../stores/categories'
import { reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { createProductFun } from '../utils/ApiFunc'
const preview = ref<string | null>(null)
const selectedFile = ref<File | null>(null)
const categories = ref<Category[]>([])
const response = ref<void>()
const router = useRouter()
const userData: Product = reactive({
  name: '',
  price: 0,
  category: '',
  desc: '',
  image: null,
  _id: 0,
  bought: 0,
  viewed: 0
})

watch(
  () => useCategoriesStore().categories,
  () => {
    categories.value = useCategoriesStore().categories
  }
)
categories.value = useCategoriesStore().categories

const onFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files ? input.files[0] : null

  if (file) {
    selectedFile.value = file
    updatePreview()
  }
}
const updatePreview = () => {
  if (!selectedFile.value) {
    return
  }
  console.log('test')

  const reader = new FileReader()

  reader.onload = () => {
    preview.value = reader.result as string
  }

  reader.readAsDataURL(selectedFile.value)
}

const addProduct = async () => {
  const formData = new FormData()
  formData.append('image', selectedFile.value as Blob)
  formData.append('name', userData.name)
  formData.append('price', userData.price)
  formData.append('desc', userData.desc)
  formData.append('category', userData.category)

  response.value = await createProductFun(formData)
    .then((res) => {
      console.log('res: ', res)
      console.log('response: ', response)
    })
    .finally(() => {
      console.log('finally')
      router.push('/')
    })
  console.log('response: ', response)
}
</script>
