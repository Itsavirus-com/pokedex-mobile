import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Login from './screens/login';
import PokemonList from './screens/pokemon-list';
import PokemonDetails from './screens/pokemon-details';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="pokemon-list" component={PokemonList} />
        <Stack.Screen name="pokemon-details" component={PokemonDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
