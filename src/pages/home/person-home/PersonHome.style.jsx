import styled from "styled-components";

import { containerStyles } from "../../../assets/styles/SharedStyles";


export const PersonContainer = styled.div`
  width: 100%;
  padding: 10% 0;
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
    text-transform: capitalize;
    font-family: ${({ theme }) => theme.family.messi};
    font-weight: ${({ theme }) => theme.weight.medium};
    font-size: ${({ theme }) => theme.sizes.xxl};
    color: ${({ theme }) => theme.colors.PrinCDark};
  }
  
  & .title-detail{
    object-fit: cover;
    width: 500px;
  }
`
export const ContainerCardsPerson = styled.div`
  display: flex;
  justify-content: space-between;
  
  & .card-person{
    overflow: hidden;
    position: relative;
    display: block;
    width: 400px;
    height: 500px;
    
    
    &:hover {
    
      &::before{
        height: 35px;
      }
    
      & .card-container-description{
        bottom: 0;
      }
      
      & .card-container-image{
        transform: scale(1.05);
      }
    }
    
    &::before{
      z-index: 1;
      top: -5px;
      position: absolute;
      content: '';
      width: 100%;
      height: 25px;
      box-shadow: 2px 0 5px 2px rgba(0, 0, 0, 0.2);
      background: #38383890;
      backdrop-filter: blur(5px);
      transition: all .2s;
    }
    
    & .card-container-image{
      width: 400px;
      height: 500px;
      display: flex;
      justify-content:center;
      align-items:center;
      transition: all .2s;
      
      & img{
        width: 410px;
        height: 520px;
      }
    }
    
    & .card-container-description{
      z-index: 10;
      position: absolute;
      width: 100%;
      bottom: -90px;
      padding: 15px 20px;
      box-shadow: -2px 0 5px 3px rgba(0, 0, 0, 0.5);
      background: #38383890;
      backdrop-filter: blur(5px);
      transition: all .2s;
      
        & .card-title{
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: ${({ theme }) => theme.family.robo};
        font-weight: ${({ theme }) => theme.weight.sbold};
        font-size: ${({ theme }) => theme.sizes.xl};
        color: ${({ theme }) => theme.colors.white};
        margin-bottom: 10px;
        
        &::before{
          display: block;
          content: '';
          width: 12px;
          height: 8px;
          background: #fff;
        }
      }
      
      & .card-desc{
        font-family: ${({ theme }) => theme.family.robo};
        font-weight: ${({ theme }) => theme.weight.regular};
        font-size: ${({ theme }) => theme.sizes.m};
        color: ${({ theme }) => theme.colors.white};
        margin-bottom: 10px;
      }
    }
  }
`