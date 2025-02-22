import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const index = () => {
  return (
    <View>
      <Text>Auth</Text>
      <Button title="Go Home" onPress={() => router.navigate('/(home)')} />
    </View>
  )
}

export default index