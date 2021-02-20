import {
  extendTheme,
  ChakraProvider,
  ThemeConfig,
  ColorModeScript
} from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
} as ThemeConfig;
const theme = extendTheme({ config });

ReactDOM.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </>,
  document.getElementById('root')
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
