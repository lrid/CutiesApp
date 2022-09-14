import { Overlay } from "@rneui/themed";
import {useState} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

export default function Modal ({name}) {

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    }

    return (
        <View>
            <Pressable onPress={toggleOverlay} style={styles.button}>
                <Text>Guess my name!</Text>
            </Pressable>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={{backgroundColor:"pink", width:150, height:70, justifyContent:"center", alignItems:"center", lignItems: 'center',}}>
                <Text>It's {name}!</Text>
            </Overlay>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#95D1A2',
        height: 35,
        width: 200,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
    },
});