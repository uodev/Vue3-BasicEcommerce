<template>
  <HeroSectionContainer>
    <app-header />
    <HeroSectionContainerFlex>
      <HeroSectionContainerNormal>
        <HeroSectionContainerFlexColumn>
          <HeroSectionTitle> Medium Lenght hero headline goes here </HeroSectionTitle>
          <HeroSectionDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestiae id quod
            numquam quidem consequuntur? Eveniet quaerat perspiciatis ratione aut provident amet
            nostrum exercitationem nemo est magni sunt iure fugiat impedit repellat.
          </HeroSectionDesc>
          <HeroSectionButton> Keşfetmeye Başla </HeroSectionButton>
        </HeroSectionContainerFlexColumn>
      </HeroSectionContainerNormal>
      <HeroSectionImage src="/src/assets/img/bag_one.jpg" />
    </HeroSectionContainerFlex>
  </HeroSectionContainer>
</template>

<script lang="ts" setup>
import {
  HeroSectionContainer,
  HeroSectionContainerFlex,
  HeroSectionContainerFlexColumn,
  HeroSectionContainerNormal,
  HeroSectionDesc,
  HeroSectionImage,
  HeroSectionTitle,
  HeroSectionButton
} from '../../styled-components/heroSectionStyled'
</script>
