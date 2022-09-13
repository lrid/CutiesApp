import React from "react";
import {View, Text, StyleSheet} from 'react-native'

export default function Kittens () {
    return (
        <View style={styles.container}>
            <Pics animal="Kittens" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    }
});