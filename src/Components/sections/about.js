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
margin: 5rem;
position: absolute;
display: flex;
flex-direction : column;
justify-content: center;
text-align: center;
align-items: center;
gap: 5rem;
`


const about = () => {
  return (
    <Section>
    <Canvas>
    <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true} />
    </Canvas>
    <TextContainer>
    <h1>About</h1>
  <p>The Terraft collection is a stunning array of digital art pieces that have been created using illustrations, 
    bringing the wonders of the natural world to life in a way that has never been seen before.
    Each NFT in the Terraft collection has been carefully crafted by talented artists, 
    who have drawn inspiration from the vast and intricate ecosystems that make up our planet. 
    From majestic landscapes to exotic creatures, each Terraft NFT tells a story and captures a moment in time, 
    inviting you to explore and discover the magic of nature in all its glory. 
    Whether you are a seasoned collector or simply appreciate the beauty of art and nature, 
    the Terraft NFT collection is a must-see, and a true testament to the creativity and ingenuity of the human spirit.</p>
    
    </TextContainer>
    </Section
    >
  )
}

export default about