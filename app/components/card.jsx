import {View, Text, Image} from 'react-native';
import React from 'react';
import Title2 from './title2';
import Type from './type';
export const PokemonCard = props => {
  const {image, name, type1, type2} = props;
  return (
    <View
      style={{
        height: 111,
        width: 160,
        backgroundColor: '#37C28F',
        borderRadius: 10,
        marginBottom: 12,
      }}>
      <Text
        style={{
          color: '#FAFAFA',
          fontSize: 14,
          marginLeft: 10,
          marginVertical: 8,
        }}>
        {name}
      </Text>
      <Type type1={type1} type2={type2}></Type>
      <Image
        style={{width: 50, height: 50, marginLeft: 100}}
        source={{uri: image}}></Image>
    </View>
  );
};
