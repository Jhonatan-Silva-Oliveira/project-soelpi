import styled from "styled-components";

import { containerStyles } from "../../../assets/styles/SharedStyles";

import angelBG from "../../../assets/img/update/princess-angel-bg.png";

export const NewsContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 10% 0;
  
  &::after{
    z-index: -1;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #00000073;
    backdrop-filter: blur(5px);
  }
  &::before{
    z-index: -2;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url(${angelBG});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }
`
export const LimitContainer = styled.div`
  ${containerStyles}
`
export const ContainerTitle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 20px;
  margin-bottom: 60px;
  
  & .title{
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.family.messi};
    font-weight: ${({ theme }) => theme.weight.medium};
    font-size: ${({ theme }) => theme.sizes.xxl};
    color: ${({ theme }) => theme.colors.white};
  }
  
  & .title-detail{
    object-fit: cover;
    width: 500px;
  }
`
export const ContainerNews = styled.div`
  display: flex;
  background: #0000005c;
  backdrop-filter: blur(5px);
  
  & .container-image{
    width: calc(100% / 2);
    
    & .image-news{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 75%;
    }
  }
  & .contain-news{
    width: calc(100% / 2);
    padding: 30px;
    
    & .title-list-news{
      margin-left: 40px;
      margin-bottom: 20px;
      font-family: ${({ theme }) => theme.family.robo};
      font-weight: ${({ theme }) => theme.weight.medium};
      font-size: ${({ theme }) => theme.sizes.m};
      color: ${({ theme }) => theme.colors.white};
    }
    & .list-news{
      font-family: ${({ theme }) => theme.family.robo};
      font-weight: ${({ theme }) => theme.weight.regular};
      font-size: ${({ theme }) => theme.sizes.s};
      color: ${({ theme }) => theme.colors.white};
      list-style: none;
      margin-bottom: 30px;
      
      & .item-news{
        cursor: pointer;
        display: flex;
        gap: 20px;
        justify-content: space-between;
        align-items: center;
        padding: 15px 10px;
        border-top: 2px solid #ffffff42;
        
        &:hover{
          background: #7070702d;
        }
        
        & .data-news{
          font-size: ${({ theme }) => theme.sizes.xs};
          color: ${({ theme }) => theme.colors.textColorLight};
        }
      }
      & .item-news:last-of-type{
        border-bottom: 2px solid #ffffff5c;
      }
    }
  }
`
export const BtnMoreNews = styled.div`
  display: flex;
  justify-content: end;
  
  & .btn-more{
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: ${({ theme }) => theme.family.robo};
    font-weight: ${({ theme }) => theme.weight.regular};
    font-size: ${({ theme }) => theme.sizes.m};
    color: ${({ theme }) => theme.colors.white};
    background-color: transparent;
    border: none;
    transition: all .2s;
    
    & .icon-more{
      border-radius: 5px;
      width: 26px;
      transition: all .2s;
    }
    
    &:hover .icon-more{
        transform: scale(1.1);
        box-shadow: 1px 1px 3px #00000068;
      }
  }
`
