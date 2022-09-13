import React from "react";
import {View, StyleSheet} from 'react-native'
import Pics from "../components/pics";
import deerpic from './deer-pic.jpeg'

export default function Deer () {
    return (
        <View style={styles.container}>
            <Pics animal="Deer" image={deerpic}/>
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