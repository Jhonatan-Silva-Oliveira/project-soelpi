import styled from "styled-components";

import { containerStyles } from "../../../assets/styles/SharedStyles";

export const FooterContainer = styled.div`
  background: ${({ theme }) => theme.colors.black};
`
export const LimitContainer = styled.div`
  ${containerStyles}
  display: flex;
  align-items: center;
  gap: 20px;
  
  & .link{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    
    &:hover{
      animation: boing .5s ease infinite alternate;
      
      @keyframes boing {
        from{
          transform: translateY(0);
        }
        to{
          transform: translateY(-3px);
        }
      }
    }
  
    & .icon-link {
      width: 100%;
      height: 100%;
    }
  
    & .icon-insta{
    width: 25px;
    }
  }
`
export const ContainerLinksSocial = styled.div`
  padding: 10px 0;
  background-color: #282828;
`
export const ContainFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`

export const Logo = styled.div`
  width: ${props => props.width};
  margin-bottom: 10px;
  
  & img {
    width: 100%;
  }
`

export const Nav = styled.nav`
  display: flex;
  margin-bottom: 20px;
  gap: 40px;
  
  .nav-link{
    font-family: ${({ theme }) => theme.family.pop};
    font-weight: ${({ theme }) => theme.weight.regular};
    font-size: ${({ theme }) => theme.sizes.xxs};
    color: ${({ theme }) => theme.colors.textColorLight};
    text-decoration: none;
    transition: all 0.2s;
    
    &:hover{
      color: ${({ theme }) => theme.colors.white};
      transform: translateY(-2px);
    }
  }
`
export const ContainDesc = styled.div`
  font-family: ${({ theme }) => theme.family.robo};
  font-weight: ${({ theme }) => theme.weight.regular};
  font-size: ${({ theme }) => theme.sizes.xxs};
  color: ${({ theme }) => theme.colors.textColorLight};
  margin-bottom: 10px;
  
  & .paragraph{
    text-align: center;
    width: 120ch;
    line-height: 1.8em;
  }
`
export const Copy = styled.p`
  font-family: ${({ theme }) => theme.family.robo};
  font-weight: ${({ theme }) => theme.weight.regular};
  font-size: ${({ theme }) => theme.sizes.xxs};
  color: ${({ theme }) => theme.colors.textColorLight};
`