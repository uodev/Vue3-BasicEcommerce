<template>
  <StyledContainer>
    <app-header />
    <StyledContainer>
      <StyledProductInfo>{{ product?.category.name }} > {{ product?.name }}</StyledProductInfo>
    </StyledContainer>
    <StyledContainerFlex>
      <!--! product images -->

      <StyledImage :src="product?.image" alt="" />

      <!--! product detail -->

      <StyledContainerFlexColumn>
        <StyledProductName>{{ product?.name }}</StyledProductName>
        <StyledProductPrice> ${{ product?.price }} </StyledProductPrice>
        <StyledProductDesc>
          {{ product?.desc }}
        </StyledProductDesc>
        <!-- !Buttons -->
        <StyledButtonAddCard @click="$router.push('/')"> Add To Card </StyledButtonAddCard>
        <StyledButtonBuyNow @click="buyProduct"> Buy Now </StyledButtonBuyNow>
        <!-- !Extra Details -->
        <StyledContainer>
          <StyledDivider />
          <StyledProductDetailTitle> Details </StyledProductDetailTitle>
          <StyledProductDetailDesc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, perspiciatis unde
            nulla excepturi quo placeat. Id dolore nostrum velit fugiat.
          </StyledProductDetailDesc>
        </StyledContainer>
        <StyledContainer>
          <StyledDivider />
          <StyledProductDetailTitle> Shipping </StyledProductDetailTitle>
          <StyledProductDetailDesc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, perspiciatis unde
            nulla excepturi quo placeat. Id dolore nostrum velit fugiat.
          </StyledProductDetailDesc>
        </StyledContainer>
        <StyledContainer>
          <StyledDivider />
          <StyledProductDetailTitle> Returns </StyledProductDetailTitle>
          <StyledProductDetailDesc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, perspiciatis unde
            nulla excepturi quo placeat. Id dolore nostrum velit fugiat.
          </StyledProductDetailDesc>
          <StyledDivider />
        </StyledContainer>
      </StyledContainerFlexColumn>
    </StyledContainerFlex>
  </StyledContainer>
</template>

<script setup lang="ts">
import {
  StyledButtonAddCard,
  StyledButtonBuyNow,
  StyledContainer,
  StyledContainerFlex,
  StyledContainerFlexColumn,
  StyledDivider,
  StyledImage,
  StyledProductDesc,
  StyledProductDetailDesc,
  StyledProductDetailTitle,
  StyledProductInfo,
  StyledProductName,
  StyledProductPrice
} from '../styled-components/productdetail/productDetailStyled'
import { useRoute } from 'vue-router'
import { getOneProductFun, buyProductFun } from '../utils/ApiFunc'
import { onBeforeMount, ref } from 'vue'
import Product from '../utils/Product'

const id = useRoute().params.id
const product = ref<Product>()
onBeforeMount(async () => {
  product.value = await getOneProductFun(id)
})

const buyProduct = async () => {
  await buyProductFun(id)
}
</script>
