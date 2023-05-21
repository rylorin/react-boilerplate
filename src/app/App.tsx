import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Flex, Link, Spacer, Text, VStack, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes as Switch } from 'react-router-dom';
import { Button } from './components/Button/Button';
import SpinningLogo from './components/SpinningLogo/SpinningLogo';
import Welcome from './components/Welcome/Welcome';
import logo from './logo.svg';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const { toggleColorMode } = useColorMode();
  const displayLightModeToggle = useColorModeValue('none', 'display');
  const displayDarkModeToggle = useColorModeValue('display', 'none');
  const linkColor = useColorModeValue('cyan.500', '#61dafb');

  return (
    <Router>
      <VStack as="header" alignItems="center" h="100%">
        <Flex w="100%" justifyContent="right" m="2">
          <Spacer />
          <MoonIcon display={displayDarkModeToggle} m="2" onClick={toggleColorMode} />
          <SunIcon display={displayLightModeToggle} m="2" onClick={toggleColorMode} />
        </Flex>
        <SpinningLogo src={logo} alt="logo" />
        <Welcome />
        <Button onClick={() => setCount((count) => count + 1)} label={'count is: ' + count} backgroundColor="white" />
        <Text>
          Edit <code>App.tsx</code> and save to test HMR updates.
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
          <Route path="/about" element={<main>About</main>} />
          <Route path="/" element={<main>Home</main>} />
        </Switch>
        <Spacer />
      </VStack>
    </Router>
  );
}

export default App;
