import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles'
import{light} from './styles/Themes'

import Hero from './Components/sections/Hero';




function App () {
  return (
    <>
    <GlobalStyles />
     <ThemeProvider theme={light}>
     <Hero/>
     </ThemeProvider>
    </>
  
  );
}

export default App