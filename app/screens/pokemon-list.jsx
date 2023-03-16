import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {env} from '../../env.development';

const PokemonList = () => {
  fetch(`${env.API_URL}/pokemons`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
    });

  return (
    <View>
      <Text>PokemonList</Text>
    </View>
  );
};

export default PokemonList;

const styles = StyleSheet.create({});
