import React, {useState} from 'react';
import {StyleSheet, Button, View, Image, Text} from 'react-native';
import Input from '../components/input';
import PasswordInput from '../components/password-input';

import {images} from '../assets';

const Login = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={images.logo} style={styles.logo} />
          <Text style={styles.logo_text}>Pokedex Login</Text>
        </View>
        <View style={styles.form}>
          <Input label="Email" placeholder="Enter your email" />
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            error={{message: 'Error message example'}}
          />
          <View style={styles.button}>
            <View style={styles.button2}>
              <Button
                title={'Login'}
                onPress={() =>
                  navigation.navigate('pokemon-list', {
                    itemId: 86,
                    otherParam: 'anything you want here',
                  })
                }
              />
            </View>

            <Button
              title={'Login'}
              onPress={() =>
                navigation.navigate('pokemon-details', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                })
              }
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0d6efd',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  form: {padding: 10},
  logo: {width: 40, height: 40, marginRight: 10, borderRadius: 10},
  logo_text: {fontSize: 20, color: 'white'},
  button: {
    marginTop: 30,
    marginBottom: 10,
  },
  button2: {
    marginBottom: 10,
  },
});
