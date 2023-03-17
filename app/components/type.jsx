import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Type = props => {
  const {type1, type2} = props;
  return (
    <View style={style.container}>
      <View style={style.containertype}>
        <Text style={style.text}>{type1}</Text>
      </View>
      <View style={style.containertype}>
        <Text style={style.text}>{type2}</Text>
      </View>
    </View>
  );
};
export default Type;

const style = StyleSheet.create({
  containertype: {
    backgroundColor: '#34B888',
    width: 50,
    borderRadius: 100,
    alignItems: 'center',
    marginHorizontal: 2,
    marginLeft: 5,
  },
  container: {
    flexDirection: 'row',
  },
  text: {fontSize: 12},
  color: '#FAFAFA',
});
