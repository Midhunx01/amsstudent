import { View, Text, StyleSheet } from 'react-native'


export default function AttendanceSubjectView({subjectName, percentage}) {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.subjectContainer}>
                <Text style={styles.textStyle}>{subjectName}</Text>
            </View>
            <View style={styles.percentageContainer}>
                <Text style={styles.percentageText}>{percentage}</Text>
            </View>

        </View>

    )

}

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        marginHorizontal: 10
    },
    subjectContainer: {
        width: '80%',
        padding: 20,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        backgroundColor: '#7F86FF'
    },
    textStyle: {
        color: 'white',
        marginTop: 4,
        marginLeft: 1,
        fontSize: 18,
        fontWeight: 'bold'
    },
    percentageContainer: {
        width: '20%',
        marginLeft: 10,
        backgroundColor: '#7F86FF',
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    percentageText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    }

}) 