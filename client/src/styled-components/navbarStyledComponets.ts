import styled from 'vue3-styled-components'

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #4f4557;
  height: 80px;
  padding: 0 20px;
`
export const Logo = styled.h2`
  height: 30px;
`

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const MenuItem = styled.li`
  margin: 0 10px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: #6d5d6e;
  }
`

export const SearchBox = styled.input`
  padding-top: 10px;
  padding-right: 100px;
  padding-bottom: 10px;
  padding-left: 20px;
  border: none;
  color: white;
  border-radius: 5px;
  background-color: #4f4557;

  ::placeholder {
    color: white;
    position: absolute;
    left: 20px;
  }
`

export const SearchIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 5px;
  color: white;
  cursor: pointer;
`

export const SearchIconWrapper = styled.div`
  position: relative;
`
import { RouterLink } from 'vue-router'

export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: #252525;
  &:hover {
    color: #6d5d6e;
  }
`
