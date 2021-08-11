import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';

import { GlobalStyle } from './globalStyles';
import store, { history } from './redux/store';
import { Pages } from './pages';
import { ScrollToTop } from './components/ScrollToTop';

import 'swiper/swiper.scss';

const theme = {
  mainTextColor: '#0B0B09',
  backgroundColor: '#FCFDFF',
};

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <ScrollToTop />
          <GlobalStyle />
          <Pages />
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
