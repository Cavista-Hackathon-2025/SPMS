import React from 'react'
import { StyleSheet, View } from 'react-native'


const index = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.header}>SPMS</View>
            <View style={styles.header}>Dr. Olumide</View>
        </View>
        <View style={styles.body}>
            <View style={styles.bodyHeader}>

            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    body:{
        
    },
    bodyHeader:{
        
    }
})

export default index