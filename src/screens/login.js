import { View, StyleSheet, Text } from 'react-native'
import { useState } from 'react'


export default function LogIn () {
    
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Welcome Back!</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText : {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',

    },
});