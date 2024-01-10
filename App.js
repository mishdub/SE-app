// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PetProfileScreen from './screens/PetProfileScreen';
import EditPetProfileScreen from './screens/EditPetProfileScreen';
import FindVetScreen from './screens/FindVetScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PetProfile">
        <Stack.Screen name="PetProfile" component={PetProfileScreen} />
        <Stack.Screen name="EditPetProfile" component={EditPetProfileScreen} />
        <Stack.Screen name="FindVetScreen" component={FindVetScreen} />
        {/* Add more screens if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
