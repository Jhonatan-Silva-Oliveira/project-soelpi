import styled from "styled-components";

import { containerStyles } from "../../../assets/styles/SharedStyles";


export const WordContainer = styled.div`
  width: 100%;
  padding: 80px 0;
  position: relative;
  background-color: black;
`
export const LimitContainer = styled.div`
  ${containerStyles}
  position: relative;
  height: 100%;
`
export const ContainWordHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  & .title{
    width: 20ch;
    font-family: ${({ theme }) => theme.family.messi};
    font-weight: ${({ theme }) => theme.weight.regular};
    font-size: ${({ theme }) => theme.sizes.xxl};
    color: ${({ theme }) => theme.colors.white};
    line-height: 58px;
    margin-bottom: 32px;
  }
  & .description{
    width: 58ch;
    font-family: ${({ theme }) => theme.family.robo};
    font-weight: ${({ theme }) => theme.weight.regular};
    font-size: ${({ theme }) => theme.sizes.m};
    color: ${({ theme }) => theme.colors.textColorLight};
    line-height: 30px;
    margin-bottom: 10px;
  }
  & .btn-more-info{
    display: inline-block;
    width: fit-content;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.family.pop};
    font-weight: ${({ theme }) => theme.weight.medium};
    font-size: ${({ theme }) => theme.sizes.m};
    color: ${({ theme }) => theme.colors.white};
    padding: 2px 0;
    text-decoration: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
    margin-bottom: 40px;
    transition: all .2s;
    
    &:hover{
      transform: translate(5px);
    }
  }
  & .container-img-words{
    display: flex;
    gap: 50px;
    
    & img{
      display: inline-block;
      width: 270px;
      height: 170px;
    }
  }
`
export const ContainerImgWord = styled.div`
  position: absolute;
  right: 20px;
  top: -150px;
  
  & .box-image{
    border: 5px inset ${({ theme }) => theme.colors.black};
    width: 550px;
    height: 800px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    &::before{
      z-index: 1;
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background: transparent;
      pointer-events: none;
      top: 0;
      left: 0;
      -webkit-box-shadow: inset 0px 0px 30px 10px rgba(0,0,0,0.75);
      -moz-box-shadow: inset 0px 0px 30px 10px rgba(0,0,0,0.75);
      box-shadow: inset 0px 0px 30px 10px rgba(0,0,0,0.75);
    }
    
    & img{
      width: 600px;
      height: 900px;
      object-fit: cover;
      object-position: 50%;
    }
  }
`