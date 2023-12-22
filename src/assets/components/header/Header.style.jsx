import styled from "styled-components";

import { containerStyles } from "../../styles/SharedStyles";

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 1000;
  display: flex;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.black};
`
export const LimitContainer = styled.div`
  ${containerStyles}
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled.div`
  width: 150px;
  height: 60px;
  
  & img {
    width: 100%;
  }
`
export const Nav = styled.nav`
  display: flex;
  gap: 60px;
  
  .nav-link{
    font-family: ${({ theme }) => theme.family.pop};
    font-weight: ${({ theme }) => theme.weight.medium};
    font-size: ${({ theme }) => theme.sizes.xs};
    color: ${({ theme }) => theme.colors.textColorLight};
    text-decoration: none;
    transition: all 0.2s;
    
    &:hover{
      color: ${({ theme }) => theme.colors.white};
      transform: translateY(-2px);
    }
  }
`
export const CotainerBtnHeader = styled.div`
  width: 220px;
  height: 70px;
  background: ${({ theme }) => theme.colors.PrinC};
  clip-path: polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%);
  
  & .btn{
    display: inline-block;
    border: none;
    width: 100%;
    height: 100%;
    clip-path: polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%);
    font-family: ${({ theme }) => theme.family.pop};
    font-weight: ${({ theme }) => theme.weight.medium};
    font-size: ${({ theme }) => theme.sizes.xs};
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.PrinC};
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all .5s;
    
    &:hover{
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.PrinCLight};
    clip-path: polygon(15% 15%, 100% 0%, 85% 90%, 0% 100%);
    }

  }

`