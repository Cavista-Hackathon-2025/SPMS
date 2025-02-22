import { View, TextInput, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const index = () => {
  return (
    <View>
      <View>
        <TextInput />
        <TextInput />
      </View>
      <Button title="Go to Auth" onPress={() => router.navigate('/(auth)')} />
    </View>
  )
}

export default index