import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useToggle} from '../hooks/use-toggle.hook';

const PasswordInput = props => {
  const {label, error} = props;
  const [showPassword, togglePassword] = useToggle();

  return (
    <View>
      <Text>{label}</Text>
      <View style={styles.wrapper}>
        <View
          style={[
            styles.container,
            error && {borderColor: styles.error.color},
          ]}>
          <TextInput
            style={styles.input}
            type={showPassword ? 'text' : 'password'}
          />
        </View>
        <TouchableOpacity
          onPress={() => togglePassword()}
          style={styles.toggle}>
          <Text>{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      {error?.message && <Text style={styles.error}>{error?.message}</Text>}
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  wrapper: {flexDirection: 'row', alignItems: 'center'},
  container: {
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderColor: '#ced4da',
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 0,
    fontSize: 16,
    width: '80%',
    height: 47,
  },
  toggle: {
    backgroundColor: '#e9ecef',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 49,
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: '#ced4da',
    borderLeftWidth: 0,
  },
  error: {
    fontSize: 12,
    color: '#dc3545',
  },
});
