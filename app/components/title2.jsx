import {StyleSheet, Text, View} from 'react-native';

const Title2 = props => {
  const {title} = props;
  return (
    <View>
      <Text style={style.color}>{title}</Text>
    </View>
  );
};
export default Title2;

const style = StyleSheet.create({
  color: {
    color: ' #FAFAFA',
    fontSize: 24,
  },
});
