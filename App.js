import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeTest from './Screens-Test/HomeTest'
import InfoHome from './Screens-Info/InfoHome'
import Donation from './Screens-Info/Donation'
import Emergency from './Screens-Info/Emergency'
import Related from './Screens-Info/Related'
import Risk1 from './Screens-Form/Risk1'
import Risk2 from './Screens-Form/Risk2'
import Risk3 from './Screens-Form/Risk3'
import Yes from './Screens-Form/Yes'
import No from './Screens-Form/No'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeTest" component={HomeTest} />
        <Stack.Screen name="InfoHome" component={InfoHome} />
        <Stack.Screen name="Donation" component={Donation} />
        <Stack.Screen name="Emergency" component={Emergency} />
        <Stack.Screen name="Related" component={Related} />
        <Stack.Screen name="Risk1" component={Risk1} />
        <Stack.Screen name="Risk2" component={Risk2} />
        <Stack.Screen name="Risk3" component={Risk3} />
        <Stack.Screen name="Yes" component={Yes} />
        <Stack.Screen name="No" component={No} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
