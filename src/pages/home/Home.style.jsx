import styled from "styled-components";

import { containerStyles } from "../../assets/styles/SharedStyles";

import bgHome from "../../assets/img/background/bg-anime.png";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 80px;
  background: url(${bgHome});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
`
export const LimitContainer = styled.div`
  ${containerStyles}
  height: 100%;
  
  & .banner{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`
export const ContainerLogo = styled.div`
  margin-top: 100px;
  margin-bottom: 80px;
  position: relative;
  width: 400px;
  height: 200px;
  
  &::after{
    z-index: 1;
    border-radius: 50%;
    position: absolute;
    content: '';
    width: 150px;
    height: 150px;
    background: radial-gradient(#d6ebff 0%,#5996cf 10%,#346899 20%,#1e3a53b9 60%,rgba(30, 58, 83, 0.103) 90%, rgba(0, 0, 0, 0.05) 100%);
    left: 65px;
    top: 25px;
    animation: moveStar 50s ease infinite;
    
    @keyframes moveStar {
      0%{
        transform: translate(0px, 0px)
        
      }
      100%{
        transform: translate(0px, 0px);
        transform: scale(1.2);
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
  width: 250px;
  height: 60px;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.family.robo};
  font-weight: ${({ theme }) => theme.weight.sbold};
  font-size: ${({ theme }) => theme.sizes.m};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.linearGradientDark};
  border-radius: 5px;
`
export const ContainerPlatforms = styled.div`

  
  & .paragraph-platporms{
    font-family: ${({ theme }) => theme.family.robo};
    font-weight: ${({ theme }) => theme.weight.sbold};
    font-size: ${({ theme }) => theme.sizes.xl};
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 32px;
  }
  & .container-img-platforms{
    display: grid;
    align-items: center;
    grid-template-columns: 120px repeat(3, 170px);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 20px;
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