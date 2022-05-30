import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider, Empty } from 'antd';
import { I18nextProvider } from 'react-i18next';
import { sentryCredentials } from 'configs/sentry';
import theme from '@enouvo/uikit/src/static/theme/theme.json';
import * as Sentry from '@sentry/browser';
import fr from 'antd/lib/locale/fr_FR';
import moment from 'moment';
import i18n from './configs/language';
import store from './@redux/store';
import AppWrapper, { GlobalStyle } from './appStyle';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import 'moment/locale/fr';
import 'antd/dist/antd.less';
import { initFirebase } from './api/firebase';

process.env.REACT_APP_NODE_ENV !== 'dev' && Sentry.init(sentryCredentials);

moment.locale(localStorage.getItem('i18nextLng') === 'fr' ? 'fr' : 'en');

initFirebase();
ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <GlobalStyle />
          <ConfigProvider
            {...localStorage.getItem('i18nextLng') === 'fr' && {
              locale: fr,
            }}
            renderEmpty={() => <Empty />}
          >
            <Routes />
          </ConfigProvider>
        </AppWrapper>
      </ThemeProvider>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
