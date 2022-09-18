import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../../firebase'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Dashboard")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <Text style={styles.headerText}>Welcome back!</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.buttonStyle}
        >
          <Text style={styles.ButtonTextStyle}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.buttonStyle, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Login

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