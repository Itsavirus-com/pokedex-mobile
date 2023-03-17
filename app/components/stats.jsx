import {StyleSheet, Text, View} from 'react-native';

export const Stats = props => {
  const {left, right} = props;
  return (
    <View style={styles.container_content}>
      <Text style={styles.text_left}>{left}</Text>
      <Text style={styles.text_right}>{right}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text_left: {
    color: '#A9A9A9',
    fontSize: 13,
    fontWeight: '600',
    marginRight: 70,
    marginLeft: 15,
  },
  text_right: {
    color: '#161414',
    fontSize: 13,
    fontWeight: '600',
  },
  container_content: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
