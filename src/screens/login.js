import { View, StyleSheet, Text, KeyboardAvoidingView, TextInput } from 'react-native'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function LogIn () {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View>
                <Text style={styles.headerText}>Welcome Back!</Text>
                <TextInput 
                placeholder="Email"
                value={email}
                onChange= {text => setEmail(text)}
                style={styles.input}
                />
                <TextInput 
                placeholder="Password"
                value={password}
                onChange= {text => setPassword(text)}
                style={styles.input} 
                secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={() => { }}
                style={styles.buttonStyle}
                >
                    <Text style={styles.ButtonTextStyle}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => { }}
                style={[styles.buttonStyle, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
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
        marginBottom:40
    },
    input : {
        backgroundColor: 'white',
        paddingHorizontal:15,
        paddingVertical: 10,
        borderRadius: 10,
        marginBottom: 10
    },
    buttonStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: '#95D1A2',
        height: 35,
        width: 120,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
    },
    ButtonTextStyle:{
        color: 'white',
        fontWeight: 'bold',
    },
    buttonOutline :{
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#95D1A2',
        borderWidth: 2
    },
    buttonOutlineText : {
        color: '#95D1A2',
        fontWeight: 'bold',
    },
    buttonContainer: {
        paddingTop: 30,
    },
});