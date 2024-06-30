import React, {useEffect} from 'react';
import StackNavigation from './src/navigations/StackNavigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { LogBox } from 'react-native';

const persistor = persistStore(store);

LogBox.ignoreAllLogs()
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackNavigation />
      </PersistGate>
    </Provider>
  )
};

export default App;

