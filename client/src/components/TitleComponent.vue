<template>
  <StyledTitle>
    <StyledSectionTitle>
      <StyledSectionCategory> <slot name="category"></slot> </StyledSectionCategory>
      <StyledContentTitle> <slot name="title"></slot> </StyledContentTitle>
      <StyledSectionDesc><slot name="desc"></slot></StyledSectionDesc>
    </StyledSectionTitle>
  </StyledTitle>
  <slot name="grid"></slot>
</template>

<script setup lang="ts">
import {
  StyledContentTitle,
  StyledSectionCategory,
  StyledSectionDesc,
  StyledSectionTitle,
  StyledTitle
} from '../styled-components/titleStyledComponents'
</script>
