import React from 'react'
import { View } from 'react-native';
import { Appbar, Avatar, Text } from 'react-native-paper';

type IProps = {
  title: string
}

const MyComponent = ({ title = "Title" }: IProps) => {
  return (
    <Appbar.Header elevated>
      {/* <Appbar.BackAction /> */}
      <Appbar.Content title={title} />
      <Appbar.Action icon="magnify" />
      {/* <Avatar.Text size={40} label="RH" style={{ backgroundColor: "red", marginRight: 5 }} /> */}
      <Avatar.Text size={40} label="RH" style={{ backgroundColor: "red", marginRight: 5 }} />
    </Appbar.Header>
  )
}

export default MyComponent;