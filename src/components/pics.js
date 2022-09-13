import { Text, StyleSheet } from 'react-native';

export default function Pics ({animal}) {
    return(
    <>
        <Text style={styles.header} >Cute pics of {animal}</Text>
    </>
    )
};

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
});