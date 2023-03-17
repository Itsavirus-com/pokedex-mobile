import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {env} from '../../env.development';
import {Stats} from '../components/stats';

const PokemonDetails = ({route}, props) => {
  const {left, right} = props;
  const {pokemonId} = route.params;

  console.log('pokemonId', pokemonId);

  const data = [
    {
      id: 0,
      left: 'Species',
      right: 'Mole',
    },
    {
      id: 1,
      left: 'Height',
      right: `  2'04"`,
    },
    {
      id: 2,
      left: 'Weight',
      right: '  73.4 lbs',
    },
    {
      id: 3,
      left: 'Abilities',
      right: 'Sand Veil, Arena Trap',
    },
  ];
  const Breeding = [
    {
      id: 0,
      left: 'Species',
      right: 'Mole',
    },
    {
      id: 1,
      left: 'Height',
      right: `  2'04"`,
    },
    {
      id: 2,
      left: 'Weight',
      right: '  73.4 lbs',
    },
    {
      id: 3,
      left: 'Abilities',
      right: 'Sand Veil, Arena Trap',
    },
  ];
  return (
    <View style={styles.background}>
      <View style={{marginLeft: 15, marginTop: 50}}>
        <Text
          style={{
            fontSize: 24,
            color: '#FAFAFA',
            marginLeft: 5,
            fontWeight: '700',
          }}>
          Diglet
        </Text>
        <View style={styles.container}>
          <View style={styles.containertype}>
            <Text style={styles.text}>Ground</Text>
          </View>
          <View style={styles.containertype}>
            <Text style={styles.text}>Earth</Text>
          </View>
        </View>
      </View>
      <Image
        style={{
          width: 150,
          height: 150,
          alignSelf: 'center',
          marginTop: 80,
          marginBottom: 15,
        }}
        source={{uri: `${env.API_URL}/images/051.png`}}></Image>
      <View style={styles.card_container}>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginTop: 20,
            }}>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '700',
                marginHorizontal: 30,
              }}>
              Stocks
            </Text>
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '700',
              }}>
              Base Stats
            </Text>
            <View
              style={{
                backgroundColor: '#6749DB',
                height: 3,
                width: 50,
                position: 'absolute',
                marginTop: 30,
                marginLeft: 30,
              }}></View>
            <View
              style={{
                backgroundColor: '#e3e1e1',
                height: 3,
                width: 95,
                position: 'absolute',
                marginTop: 30,
                marginLeft: 80,
              }}></View>
          </View>
          <View style={{marginTop: 30}}>
            {data.map(item => {
              return (
                <Stats key={item.id} left={item.left} right={item.right} />
              );
            })}
            <Text
              style={{
                color: '#000000',
                fontSize: 14,
                fontWeight: '700',
                marginLeft: 30,
                marginTop: 10,
              }}>
              Breeding
            </Text>
            {Breeding.map(item => {
              return (
                <Stats key={item.id} left={item.left} right={item.right} />
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#918f87',
    elevation: 1,
    height: 700,
  },
  card_container: {
    elevation: 2,
  },
  card: {
    backgroundColor: '#FAFAFA',
    height: 400,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  type: {
    color: '#FAFAFA',
    fontSize: 15,
  },
  containertype: {
    backgroundColor: '#7d7c77',
    width: 50,
    borderRadius: 100,
    alignItems: 'center',
    marginHorizontal: 2,
    marginLeft: 5,
  },
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },

  text: {fontSize: 12, color: '#FAFAFA'},
});
