import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InfoHome from './Screens-Info/InfoHome'
import Donation from './Screens-Info/Donation'
import Emergency from './Screens-Info/Emergency'
import Related from './Screens-Info/Related'
import Risk1 from './Screens-Form/Risk1'
import Risk2 from './Screens-Form/Risk2'
import Risk3 from './Screens-Form/Risk3'
import Risk4 from './Screens-Form/Risk4'
import Yes from './Screens-Form/Yes'
import No from './Screens-Form/No'
import DailyCase from './Screens-Home/DailyCase'
import Siriraj from './Screens-Info/siriraj';
import Chula from './Screens-Info/chula';
import Rajvidi from './Screens-Info/rajvidi';
import Redcross from './Screens-Info/redcross';
import Rama from './Screens-Info/rama';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={DailyCase} />
        <Stack.Screen name="InfoHome" component={InfoHome} />
        <Stack.Screen name="Donation" component={Donation} />
        <Stack.Screen name="Emergency" component={Emergency} />
        <Stack.Screen name="Related" component={Related} />
        <Stack.Screen name="Risk1" component={Risk1} />
        <Stack.Screen name="Risk2" component={Risk2} />
        <Stack.Screen name="Risk3" component={Risk3} />
        <Stack.Screen name="Risk4" component={Risk4} />
        <Stack.Screen name="Yes" component={Yes} />
        <Stack.Screen name="No" component={No} />
        <Stack.Screen name="Siriraj" component={Siriraj} />
        <Stack.Screen name="Chula" component={Chula} />
        <Stack.Screen name="Rajvidi" component={Rajvidi} />
        <Stack.Screen name="Redcross" component={Redcross} />
        <Stack.Screen name="Rama" component={Rama} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
