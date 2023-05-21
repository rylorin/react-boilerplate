import { ChakraBaseProvider } from '@chakra-ui/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import theme from './theme';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ChakraBaseProvider theme={theme}>
    <App />
  </ChakraBaseProvider>,
);
