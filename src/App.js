import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles'
import{light} from './styles/Themes'

import Hero from './Components/sections/Hero';
import About from './Components/sections/about';
import Roadmap from './Components/sections/Roadmap';




function App () {
  return (
    <>
    <GlobalStyles />
     <ThemeProvider theme={light}>
     <Hero/>
     <About/>
     </ThemeProvider>
    </>
  
  );
}

export default App