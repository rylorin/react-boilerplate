import { Box, Code, Link, Spacer, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes as Switch } from 'react-router-dom';

import { Button } from './components/Button/Button';
import NavBar from './components/NavBar/NavBar';
import SpinningLogo from './components/SpinningLogo/SpinningLogo';
import Welcome from './components/Welcome/Welcome';
import links from './links';
import logo from './logo.svg';

const App = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const linkColor = useColorModeValue('cyan.500', '#61dafb');

  return (
    <Router>
      <VStack as="header" alignItems="center" h="100%">
        <NavBar links={links} />
        <SpinningLogo src={logo} alt="logo" />
        <Welcome />
        <Button onClick={() => setCount((count) => count + 1)} label={'count is: ' + count} backgroundColor="white" />
        <Text>
          Edit <Code>App.tsx</Code> and save to test HMR updates.
        </Text>
        <Box>
          <Link color={linkColor} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </Link>
          {' | '}
          <Link
            color={linkColor}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </Link>
          {' | '}
          <Link color={linkColor} href="https://chakra-ui.com/docs/" target="_blank" rel="noopener noreferrer">
            chakra-ui docs
          </Link>
        </Box>
        <Switch>
          {Object.entries(links).map(([K, V]) => (
            <Route key={K} path={K} element={<main>{V}</main>} />
          ))}
        </Switch>
        <Spacer />
      </VStack>
    </Router>
  );
};

export default App;
