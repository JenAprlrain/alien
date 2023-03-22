import React, { Suspense } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Devices } from '../../styles/Themes';
import Button from '../Button';
import { dark } from '../../styles/Themes';
import { Canvas } from "@react-three/fiber";
import Tilt from 'react-tilt';

import logo from '../../assets/Terraft logo.svg';

import planet1 from '../../assets/1.gif';
import planet2 from '../../assets/2.gif';
import planet3 from '../../assets/3.gif';
import { Planet } from './planet';

const Section = styled.section`
width: 100%;
height: 100vh;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
display: flex;
align-items: center;
justify-content: center;
`

const ImgContainer2 = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
width: 50%;
height: 10vh;
`


const ImgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.text};
width: 100%;
height: 100%;
gap: 5rem;

`



const ButtonContainer = styled.div`
position: absolute;
min-height: 80vh;
display: block;
justify-content: center;
align-items: center;
gap: 22.5rem;

@media (max-width: 64em){
  align-self: center;
  text-align: center;

button{
  margin: 0 auto;
}
}

`



const Hero = () => {
  return (
    <>
      <Section>
        <Canvas>
          <Suspense fallback={null}>
            <Planet />
          </Suspense>
        </Canvas>
        <ImgContainer2>
          <Tilt >
            <img width={900} height={150} src={logo} />
          </Tilt>
        </ImgContainer2>
        <ButtonContainer>
          <Button>Whitepaper</Button>
        </ButtonContainer>
      </Section>

    </>
  )
}

export default Hero