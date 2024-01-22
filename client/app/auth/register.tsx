import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

const Register = () => {
  return (
    <SafeAreaView>
      <Text>Register</Text>
      <TextInput
        label="Email"
        value=""
        onChangeText={() => { }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

});

export default Register;