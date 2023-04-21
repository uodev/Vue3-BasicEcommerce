import styled from 'vue3-styled-components'

export const StyledContainer = styled.div``
export const StyledProductInfo = styled.span`
  margin-left: 215px;
  display: inline-block;
  margin-top: 20px;
  margin-bottom: 15px;
  color: #a9a9a9;
`
export const StyledContainerFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`
export const StyledContainerFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledImage = styled.img`
  width: 500px;
  border-radius: 12px;
  height: 550px;
  object-fit: cover;
`

export const StyledProductName = styled.h1`
  color: #252525;
  font-family: 'Quicksand';
  font-size: 40px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0;
`
export const StyledProductPrice = styled.h1`
  margin-top: 0;
  font-family: 'Quicksand';
  font-weight: 700;
  font-size: 24px;
  color: #000;
  margin-bottom: 0;
`
export const StyledProductDesc = styled.p`
  font-family: 'Quicksand';
  font-size: 16px;
  font-weight: 500;
  color: #000;
  width: 600px;
  height: 80px;
  letter-spacing: 0.035em;
`

export const StyledButtonAddCard = styled.button`
  background-color: #f6e6cd;
  padding: 12px 24px;
  border-radius: 100px;
  border: none;
  box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.18);
  color: #252525;
  letter-spacing: 0.1em;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Quicksand';
  width: 616px;
  height: 64px;
  cursor: pointer;
`

export const StyledButtonBuyNow = styled.button`
  background-color: #252525;
  margin-top: 20px;
  width: 616px;
  height: 64px;
  padding: 12px 24px;
  border-radius: 100px;
  border: none;
  box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.18);
  color: #ffffff;
  letter-spacing: 0.1em;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  font-family: 'Quicksand';
`

export const StyledDivider = styled.hr`
  background: #f47726;
  width: 616px;
  height: 1px;
  margin-left: 0;
  margin-top: 20px;
`

export const StyledProductDetailTitle = styled.p`
  width: 580px;
  height: 27px;

  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.035em;
  color: #252525;
`

export const StyledProductDetailDesc = styled.p`
  width: 650px;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.015em;
  color: #252525;
`
