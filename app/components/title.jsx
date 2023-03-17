import {StyleSheet, Text, View} from 'react-native';

const Title = props => {
  const {title} = props;
  return (
    <View>
      <Text style={style.color}>{title}</Text>
    </View>
  );
};
export default Title;

const style = StyleSheet.create({
  color: {
    color: ' #000000',
    fontSize: 24,
  },
});
