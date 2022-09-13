import { Text, StyleSheet, Image } from 'react-native';

export default function Pics ({animal, image}) {
    
    return(
    <>
        <Text style={styles.header} >Cute pics of {animal}</Text>
        <Image style={styles.image} source={image} />
    </>
    )
};

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    image: {
        marginTop: 50,
        width: 200,
        height: 300
    },
});