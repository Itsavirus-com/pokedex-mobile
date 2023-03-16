import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Input = props => {
  const {label, error} = props;
  return (
    <View>
      <Text>{label}</Text>
      <View
        style={[styles.container, error && {borderColor: styles.error.color}]}>
        <TextInput style={styles.input} />
      </View>
      {error?.message && <Text style={styles.error}>{error?.message}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ced4da',
    marginTop: 5,
    marginBottom: 5,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 0,
    fontSize: 16,
  },
  error: {
    fontSize: 12,
    color: '#dc3545',
  },
});
