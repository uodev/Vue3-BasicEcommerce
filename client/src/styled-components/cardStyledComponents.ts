import styled from 'vue3-styled-components'

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
`

export const Card = styled.div`
  border-radius: 12px;
  overflow: hidden;
  font-family: 'Quicksand', sans-serif;
  transition: all 0.3s ease;
  color: #252525;
  margin-left: 35px;
  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`
export const CardImg = styled.img`
  width: 350px;
  border-radius: 12px;
  height: 350px;
  object-fit: cover;
`

export const CardContent = styled.div`
  padding: 10px;
`

export const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 5px;
  letter-spacing: 0.0185em;
`

export const CardDesc = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  letter-spacing: 0.0035em;
`

export const CardButton = styled.h3`
  font-size: 24px;
  margin-top: 10px;
  padding: 5px 0px;
  color: #252525;
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 0.0185em;
`
import { RouterLink } from 'vue-router'

export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: #252525;
  &:hover {
    color: #6d5d6e;
  }
`
