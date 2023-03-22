import React from 'react'
import styled from 'styled-components';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from '@react-three/drei';



const Section = styled.section`
position: absolute;
width: 100%;
height: 100vh;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
display: flex;
align-items: center;
justify-content: center;
`


const TextContainer = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
`


const Roadmap = () => {
  return (
    <Section>
    <Canvas>
    <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} />
    </Canvas>
    <TextContainer>
     <h1>Roadmap</h1>
    </TextContainer>
    </Section
    >
  )
}

export default Roadmap