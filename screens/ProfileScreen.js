import { View, Text, StyleSheet, Image } from 'react-native'

import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


export default function ProfileScreen() {
    return (
        <View style={styles.rootContainer} >
            <Image style={styles.imageContainer} source={require('../assets/midhun.jpg')} />
            <Text style={styles.usernameTextStyle} >Midhun Mohan</Text>
        </View>
    )

}


const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 90
    },
    imageContainer: {
        height: 100,
        width: 100,
        marginLeft: 12,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        resizeMode: 'contain'
    },
    usernameTextStyle: {
        marginTop: 12,
        marginLeft: 12,
        fontWeight: 'bold',
        fontSize: 16,
        
    }
})