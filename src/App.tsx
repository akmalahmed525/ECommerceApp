import React, {FunctionComponent} from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import store from '@core/store';
import {Root} from '@core/navigation';

type AppProps = {};
const App: FunctionComponent<AppProps> = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </SafeAreaProvider>
  </Provider>
);

export default App;
