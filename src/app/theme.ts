// 1. import `extendTheme` or `extendBaseTheme` function
import { extendBaseTheme } from '@chakra-ui/react';
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import { ThemeOverride } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';

const { Button, Link } = chakraTheme.components;

// 2. Add your color mode config
const extensions: ThemeOverride = {
  config: { initialColorMode: 'dark', useSystemColorMode: false },
  components: {
    Button,
    Link,
  },
  styles: {
    global: {
      //   'p.chakra-text': { color: 'red' },
      code: {
        'font-family': "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
      },
    },
  },
};

// 3. extend the theme
const theme = extendBaseTheme(extensions);

export default theme;
