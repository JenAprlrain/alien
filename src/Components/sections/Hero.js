import React, { Suspense } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Devices } from '../../styles/Themes';
import Button from '../Button';
import { dark } from '../../styles/Themes';
import { Canvas } from "@react-three/fiber";

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
width: 100%;
height: 100%;
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
min-height: 7vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.text};
width: 100%;
height: 100%;
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
          <img width={1080} height={1080} src={logo} />
        </ImgContainer2>
      </Section>
      
    </>
  )
}

export default Hero