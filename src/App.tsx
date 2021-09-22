import React from 'react';
import AppNavigator from './main/navigation/AppNavigator';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./main/navigation/Header"
import { I18nextProvider } from 'react-i18next';
import i18n from "./main/i18n/index.js";

const App = () => {
  return (
      <div>
        <I18nextProvider i18n={i18n}>
          <Router>
            <Header />

            <AppNavigator/>
          </Router>
        </I18nextProvider>
      </div>
  );
}

export default App;
