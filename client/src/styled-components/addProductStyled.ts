import styled from 'vue3-styled-components'
export const StyledContainer = styled.div`
  margin-top: 0px;
`
export const StyledContainerFlex = styled.div`
  display: flex;
  margin-left: 150px;
  margin-right: 150px;
  align-items: center;
  margin-top: 0px;
  justify-content: space-between;
`
export const StyledContainerFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-top: 0;
`

export const StyledTitle = styled.h3`
  width: 600px;
  height: 20px;
  font-family: 'Russo One';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  letter-spacing: 0.035em;
  color: #252525;
  margin-top: 0;
`
export const StyledLabel = styled.label`
  width: 616px;
  height: 24px;
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.035em;
  color: #252525;
`
export const StyledInput = styled.input`
  width: 616px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #252525;
  border-radius: 10px;
  font-family: 'Quicksand';
  font-size: 20px;
  color: #000;
`
export const StyledSelect = styled.select`
  width: 616px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #252525;
  border-radius: 10px;
  font-family: 'Quicksand';
  font-size: 20px;
  color: #000;
`
export const StyledOption = styled.option``
export const StyledTextArea = styled.textarea`
  width: 616px;
  height: 100px;
  background: #ffffff;
  border: 1px solid #252525;
  border-radius: 10px;
  font-family: 'Quicksand';
  font-size: 20px;
  color: #000;
`
export const StyledAddButton = styled.button`
  background-color: #505050;
  margin-top: 20px;
  width: 616px;
  height: 64px;
  padding: 12px 24px;
  border-radius: 100px;
  border: none;
  box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.18);
  color: white;
  letter-spacing: 0.1em;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  font-family: 'Quicksand';
  &:hover {
    background-color: #252525;
  }
  transition: all 0.5s ease;
`
export const StyledInputFile = StyledInput.withComponent('input').extend`
border: none;
background-color: #f8ede3;
color: #000;
font-size: 1.2rem;
font-weight: 500;
padding-top: 0.1rem;
padding-left: 0.1rem;
&:focus {
  outline: none;
}
`

export const StyledImage = styled.img`
  width: 550px;
  height: 600px;
  object-fit: cover;
  border-radius: 50px;
`
