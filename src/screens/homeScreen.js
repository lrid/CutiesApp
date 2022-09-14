import React from "react";
import {View, Text, StyleSheet, Pressable} from 'react-native'

const Home = ({ navigation }) => {

    return(
        <View style={styles.container}>
            <Text style={styles.text}>WANNA SEE SOME CUTE ANIMALS?</Text>
            <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate('Kittens')}>
                <Text style={styles.buttonTextStyle} >Kittens</Text>
            </Pressable>
            <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate('Cows')}>
                <Text style={styles.buttonTextStyle} >Cows</Text>
            </Pressable>
            <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate('Deer')}>
                <Text style={styles.buttonTextStyle} >Deer</Text>
            </Pressable>
            <Pressable style={styles.loginButtonStyle} onPress={() => navigation.navigate('Log In')}>
                <Text style={styles.buttonTextStyle} >Log In</Text>
            </Pressable>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 30,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#95D1A2',
        height: 35,
        width: 100,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
    },
    ButtonTextStyle:{
        color: 'green',
        fontWeight: 'bold',
    },
    LoginButtonStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#95D1A2',
        height: 35,
        width: 100,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
    },
  });