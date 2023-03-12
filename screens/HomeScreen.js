import { Text, View, StyleSheet } from 'react-native'



export default function HomeScreen() {
    return (
        <View style={styles.rootContainer} >
            <Text>Home Screen</Text>
            
        </View>

    )

};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        margin: 16,
        padding: 30,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius:20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    }
})