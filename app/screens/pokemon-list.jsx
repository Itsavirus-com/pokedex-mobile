import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/header';
import {env} from '../../env.development';
import {PokemonCard} from '../components/card';

const PokemonList = () => {
  fetch(`${env.API_URL}/pokemons`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
    });

  const data = [
    {
      id: 0,
      name: 'Bulbasaur',
      image: `${env.API_URL}/images/001.png`,
      type1: 'poison',
      type2: 'grass',
    },
    {
      id: 1,
      name: 'Ivysaur',
      image: `${env.API_URL}/images/002.png`,
      type1: 'poison',
      type2: 'grass',
    },
    {
      id: 2,
      name: 'Venusaur',
      image: `${env.API_URL}/images/003.png`,
      type1: 'poison',
      type2: 'grass',
    },
    {
      id: 3,
      name: 'Diglet',
      image: `${env.API_URL}/images/050.png`,
      type1: 'ground',
    },
    {
      id: 4,
      name: 'Diglet',
      image: `${env.API_URL}/images/050.png`,
    },
    {
      id: 5,
      name: 'Diglet',
      image: `${env.API_URL}/images/050.png`,
    },
    {
      id: 6,
      name: 'Diglet',
      image: `${env.API_URL}/images/050.png`,
    },
    {
      id: 7,
      name: 'Diglet',
      image: `${env.API_URL}/images/050.png`,
    },
    {
      id: 8,
      name: 'Diglet',
      image: `${env.API_URL}/images/050.png`,
    },
    {
      id: 9,
      name: 'Diglet',
      image: `${env.API_URL}/images/050.png`,
    },
  ];
  return (
    <View>
      <Header />
      <Text
        style={{
          color: '#000000',
          fontSize: 24,
          marginLeft: 14,
          fontWeight: '700',
          paddingBottom: 7,
        }}>
        Pokedex
      </Text>

      <View style={styles.container_pokemon}>
        {data.map(item => {
          return (
            <PokemonCard
              key={item.id}
              name={item.name}
              image={item.image}
              type1={item.type1}
              type2={item.type2}
            />
          );
        })}
      </View>
    </View>
  );
};

export default PokemonList;

const styles = StyleSheet.create({
  container_pokemon: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    backgroundColor: '#37C28F ',
  },
});
