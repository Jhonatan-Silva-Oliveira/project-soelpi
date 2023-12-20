import styled from "styled-components";

import { containerStyles } from "../../styles/SharedStyles";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 80px;
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
    font-size: ${({ theme }) => theme.sizes.s};
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
  height: 80px;
  background: white;
  clip-path: polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%);
  
  & .btn{
    display: inline-block;
    border: none;
    width: 100%;
    height: 100%;
    clip-path: polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%);
    font-family: ${({ theme }) => theme.family.pop};
    font-weight: ${({ theme }) => theme.weight.medium};
    font-size: ${({ theme }) => theme.sizes.s};
    color: ${({ theme }) => theme.colors.white};
    background: #1f5fa3;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 2s;
    
    &:hover{
    color: ${({ theme }) => theme.colors.white};
    background: #62A4EA;
    clip-path: polygon(15% 15%, 100% 0%, 85% 90%, 0% 100%);
    }

  }

`