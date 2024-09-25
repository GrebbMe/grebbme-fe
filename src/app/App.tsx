import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from './styles';

import { router } from '@/app/routers/index';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;