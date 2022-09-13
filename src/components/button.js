import { Pressable, StyleSheet, Text} from "react-native";

export default function MyButton (){
    return (
        <Pressable style={styles.buttonStyle}>
            <Text style={styles.textStyle}>Cute Stuff?</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create ({
    buttonStyle:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#95D1A2',
        height: 35,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
    },
    textStyle:{
        color: 'green',
        fontWeight: 'bold',
    }
})