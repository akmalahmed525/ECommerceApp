import React, {FunctionComponent} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Config from 'react-native-config';

type AppProps = {};
const App: FunctionComponent<AppProps> = () => (
  <SafeAreaView>
    <Text>{Config.API_URL}</Text>
  </SafeAreaView>
);

export default App;
