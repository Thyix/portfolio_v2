import React from 'react';
import { Provider } from 'react-redux';
import ExempleDeBox from './main/components/ExempleDeBox';
import ThemeSelect from './main/components/ThemeSelect';
import configureStore from './main/reducers/configureStore';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>
          App React
        </h1>

        <ThemeSelect />
        <ExempleDeBox />
      </div>
    </Provider>
  );
}

export default App;
