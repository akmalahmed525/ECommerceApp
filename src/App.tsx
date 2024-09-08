import React, {FunctionComponent} from 'react';
import {Provider} from 'react-redux';
import {ProductsScreen} from '@features/products/screens';

import store from '@core/store';

type AppProps = {};
const App: FunctionComponent<AppProps> = () => (
  <Provider store={store}>
    <ProductsScreen />
  </Provider>
);

export default App;
