import logo from './logo.svg';
import './App.css';
import Routers from './Components/Routers/Routes';
import GlobalState from './Components/Global/GlobalState';
import { ThemeProvider } from '@mui/material/styles';
import { ChakraProvider } from '@chakra-ui/react';



function App() {
  return (
    <GlobalState>
      <ChakraProvider>
      <Routers />
      </ChakraProvider>
    </GlobalState>
  );
}

export default App;
