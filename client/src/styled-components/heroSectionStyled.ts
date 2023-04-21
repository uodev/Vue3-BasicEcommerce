import styled from 'vue3-styled-components'

export const HeroSectionContainer = styled.div`
  background-color: #f8ede3;
  height: 100vh;
`

export const HeroSectionContainerFlex = styled.div`
  display: flex;
  align-items: center;
`
export const HeroSectionContainerNormal = styled.div``

export const HeroSectionContainerFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`

export const HeroSectionTitle = styled.h2`
  font-family: 'Russo One';
  font-weight: 400;
  margin: 0;
  font-size: 56px;
  color: #4f4557;
  letter-spacing: 0.01em;
`

export const HeroSectionDesc = styled.p`
  font-family: 'Quicksand';
  font-weight: 400;
  font-size: 18px;
  color: #4f4557;
  letter-spacing: 0.01em;
`

export const HeroSectionButton = styled.button`
  margin-right: auto;
  padding: 10px 35px;
  border-radius: 100px;
  background-color: #4f4557;
  color: white;
  font-family: 'Quicksand';
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.1em;
  cursor: pointer;
`

export const HeroSectionImage = styled.img`
  object-fit: cover;
  width: 50%;
  height: 90.6vh;
  border-top-left-radius: 350px;
`
