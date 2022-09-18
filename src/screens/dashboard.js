import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { auth } from "../../firebase";

export default function Dashboard () {

    const navigation = useNavigation()
    
    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Log In")
            })
            .catch(error => alert(error.message))
    }

    const handleHome = () => {
        navigation.navigate('Home')
    }

    return (
        <>
        <View style={styles.container}>
            <Text style={styles.text}>Your Cute Pics</Text>
            <Text style={styles.smallText}>cute pics for: {auth.currentUser?.email}</Text>
            <TouchableOpacity
            style={styles.buttonStyle}
            onPress={handleSignOut}>
                <Text style={styles.ButtonTextStyle}>Sign Out</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.buttonStyle}
            onPress={handleHome}>
                <Text style={styles.ButtonTextStyle}>Home Screen</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

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
    smallText: {
        fontSize: 14
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
});    