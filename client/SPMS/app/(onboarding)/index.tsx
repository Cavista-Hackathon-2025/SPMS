import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { TextInput } from 'react-native-gesture-handler'

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