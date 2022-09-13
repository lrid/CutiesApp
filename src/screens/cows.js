import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import Pics from "../components/pics";

export default function Cows () {
    return (
        <View style={styles.container}>
            <Pics animal="Cows"/>
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