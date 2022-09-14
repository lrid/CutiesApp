import React, { useState } from 'react';
import {View, StyleSheet, Pressable} from 'react-native'
import Pics from "../components/pics";
import deerpic from './deer-pic.jpeg'
import Modal from '../components/modal';

export default function Deer () {
    return (
        <View style={styles.container}>
            <Pics animal="Deer" image={deerpic}/>
            <Modal name="Bambi"/>
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