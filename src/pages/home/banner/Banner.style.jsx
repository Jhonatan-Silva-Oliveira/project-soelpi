import styled from "styled-components";

import { containerStyles } from "../../../assets/styles/SharedStyles";

import bgHome from "../../../assets/img/background/bg-anime.png";

export const BannerContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 60px 0;
  padding-top: 80px;
  position: relative;
  
  &::after{
    z-index: -1;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #01253644;
  }
  &::before{
    z-index: -2;
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url(${bgHome});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
  }
`
export const LimitContainer = styled.div`
  ${containerStyles}
  height: 100%;
  
  & .banner{
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`
export const ContainerLogo = styled.div`
  position: relative;
  top: 50%;
  left: 150px;
  transform: translate(-50%,-50%);
  width: 300px;
  height: 150px;
  
  &::after{
    z-index: 1;
    border-radius: 50%;
    position: absolute;
    content: '';
    width: 150px;
    height: 150px;
    background: radial-gradient(#d6ebff 0%,#5996cf 10%,#346899 20%,#1e3a53b9 60%,rgba(30, 58, 83, 0.103) 90%, rgba(0, 0, 0, 0.05) 100%);
    left: 25px;
    top: 1%;
    animation: moveStar 10s ease infinite alternate;
    
    @keyframes moveStar {
      0%{
        transform: translate(0px, 0px);
      }
      100%{
        transform: translate(5px, 2px) scale(1.2);
      }
    }
  }
  
  & .logo-soelpi {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    margin-bottom: 80px;
  }
`
export const BtnBanner = styled.button`
  cursor: pointer;
  width: 220px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.family.robo};
  font-weight: ${({ theme }) => theme.weight.medium};
  font-size: ${({ theme }) => theme.sizes.xs};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.PrinCGrade};
  border: 3px solid ${({ theme }) => theme.colors.PrinCGrade};
  border-radius: 5px;
  transition: all 0.5s;
  
  &:hover{
    transform: translateY(5px);
    background: white;
    color: #246AB5;
  }
`
export const ContainerPlatforms = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  
  & .paragraph-platporms{
    font-family: ${({ theme }) => theme.family.robo};
    font-weight: ${({ theme }) => theme.weight.medium};
    font-size: ${({ theme }) => theme.sizes.xl};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 32px;
  }
  & .container-img-platforms{
    display: grid;
    align-items: center;
    grid-template-columns: 100px repeat(3, 150px);
    grid-template-rows: repeat(2, 50px);
    grid-column-gap: 15px;
    grid-row-gap: 0px;
    
    & .img-platform{
      display: inline-block;
      width: 100%;
    }
    & .img-platform:nth-child(1){
      grid-area: 1 / 1 / 3 / 2;
    }
    & .img-platform:nth-child(2){
      grid-area: 1 / 2 / 2 / 3;
      align-self: flex-start;
    }
    & .img-platform:nth-child(3){
      grid-area: 1 / 3 / 2 / 4;
      align-self: flex-start;
    }
    & .img-platform:nth-child(4){
      grid-area: 2 / 2 / 3 / 3;
      align-self: flex-end;
    }
    & .img-platform:nth-child(5){
      grid-area: 2 / 3 / 3 / 4;
      align-self: flex-end;
    }
    & .img-platform:nth-child(6){
      grid-area: 2 / 4 / 3 / 5;
      align-self: flex-end;
    }
  }
`