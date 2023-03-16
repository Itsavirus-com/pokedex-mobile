import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PokemonDetails = ({route}) => {
  const {pokemonId} = route.params;

  console.log('pokemonId', pokemonId);

  return (
    <View>
      <Text>PokemonDetails</Text>
    </View>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({});
