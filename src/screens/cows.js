import React from "react";
import {View, StyleSheet} from 'react-native'
import Pics from "../components/pics";
import cowpic from './cow-pic.jpeg';

export default function Cows () {
    return (
        <View style={styles.container}>
            <Pics animal="Cows" image={cowpic}/>
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