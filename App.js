/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 15,
    width: '80%',
    alignItems: 'center',
    borderColor: 'black',
  },
  error: {
    color: 'red',
  },
});

const App = () => {
  const methods = useForm();
  const onSubmit = value => {
    console.log(value);
  };
  return (
    <View style={styles.container}>
      <Text>First name</Text>
      <Controller
        style={styles.input}
        as={TextInput}
        control={methods.control}
        name="firstName"
        onChange={args => args[0].nativeEvent.text}
        rules={{required: true}}
        defaultValue=""
      />
      {methods.errors.firstName && (
        <Text style={styles.error}>This is required.</Text>
      )}
      <Text>Last name</Text>
      <Controller
        style={styles.input}
        as={TextInput}
        control={methods.control}
        name="lastName"
        onChange={args => args[0].nativeEvent.text}
        rules={{required: true}}
        defaultValue=""
      />
      {methods.errors.lastName && (
        <Text style={styles.error}>This is required.</Text>
      )}
      <Button title="apply" onPress={methods.handleSubmit(onSubmit)} />
    </View>
  );
};

export default App;
