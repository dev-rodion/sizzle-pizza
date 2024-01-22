import React from 'react'
import { View } from 'react-native'
import { Appbar, Avatar } from 'react-native-paper'
import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const Header = () => {
  const router = useRouter();

  return (
    <Appbar.Header style={{}} mode='center-aligned'>
      {/* <Appbar.BackAction onPress={() => { }} /> */}
      <Appbar.Action icon="menu" onPress={() => { }} />
      <Appbar.Content
        title="Home"
        titleStyle={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
        }}
      />
      <Appbar.Action icon="login" onPress={() => {
        router.push('/auth/login')
      }} />
      {/* <Avatar.Text size={40} label="XD" style={{ margin: 7 }} /> */}
    </Appbar.Header>
  )
}

export default Header