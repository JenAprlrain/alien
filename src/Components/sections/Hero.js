import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Devices } from '../../styles/Themes';
import Button from '../Button';

import planet1 from '../../assets/1.gif';
import planet2 from '../../assets/2.gif';
import planet3 from '../../assets/3.gif';

const Section = styled.section`
padding: 4em;
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
display: flex;
align-items: center;
justify-content: center;
`

const Title = styled.h1`
text-align: center;
font-weight: 100;
font-size: 5rem;
text-shadow: 0 0 7px #FFFFFF;

  

  @media ${Devices.Laptop} {
    font-size: 5rem;
    letter-spacing: 100px;
  }
`



const ImgContainer = styled.div`
min-height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.text};
width: 100%;
height: 100%;
gap: 5rem;

`



const Hero = () => {
  return (
      <>
      <Section>
      <Title>TERRAFT</Title>
      </Section>
      <ImgContainer>
        <img width={400} height={400} src={planet1} />
        <img width={400} height={400} src={planet2} />
        <img width={400} height={400} src={planet3} />
      </ImgContainer>
    </>
  )
}

export default Hero