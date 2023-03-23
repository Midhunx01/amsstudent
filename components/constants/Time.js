import { View, Text, StyleSheet } from "react-native";

export default function Time({startTime, endTime}) {
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.startTime} >{startTime}</Text>
            <Text style={styles.endTime} >{endTime}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 6,
        marginLeft: 10,
    },
    startTime: {
        fontWeight: '500',
        fontSize: 23,
        fontFamily: 'Helvetica Neue',
        marginLeft: 2
    },
    endTime: {
        marginTop: 8,
        fontWeight: '400',
        fontSize: 18,
        marginLeft: 4,
        color: '#A49EA5'
    }

})