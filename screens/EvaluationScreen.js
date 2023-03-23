import { View, Text, StyleSheet } from 'react-native'


export default function EvaluationScreen() {
    return (
        <View style={styles.rootContainer} >
            <Text style={styles.textStyle} >Comming Soon</Text>
        </View>

    )

}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#A49EA5'
    }

})