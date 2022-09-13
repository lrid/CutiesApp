import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import Pics from "../components/pics";
import kittenpic from './kitten-pic.jpeg';

export default function Kittens () {
    return (
        <View style={styles.container}>
            <Pics animal="Kittens" image={kittenpic}/>
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