import React from "react";
import {View, Text, StyleSheet} from 'react-native'

export default function Deer () {
    return (
        <View style={styles.container}>
            <Pics animal="Deer" />
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