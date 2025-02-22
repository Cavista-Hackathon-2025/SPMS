import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const index = () => {
  return (
    <View>
      <Redirect href={"/(onboarding)"}/>
    </View>
  )
}

export default index