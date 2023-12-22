import styled from "styled-components";

import { containerStyles } from "../../../assets/styles/SharedStyles";

import angelBG from "../../../assets/img/update/princess-angel-bg.png";

export const NewsContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  
  &::after{
    z-index: -1;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #00000073;
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
  height: 100%;
  padding: 150px 0;
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