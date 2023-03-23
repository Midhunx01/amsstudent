import { View, Text, StyleSheet } from "react-native";

export default function InactiveSchedule({subTitle, code, facultyName, todaysTopic}) {
    return (
        <View style={styles.subjectView} >
                <Text style={styles.subjectTextStyle}>{subTitle}</Text>
                <Text style={styles.courseCodeTextStyle}>Course Code: {code}</Text>
                <Text style={styles.facultyNameStyle}>{facultyName}</Text>
                <Text style={styles.todaysTopicStyle}>{todaysTopic}</Text>
            </View>
    )

}

const styles = StyleSheet.create({
    subjectView: {
        flex: 1,
        width: '100%',
        marginLeft: 35,
        marginRight: 18,
        marginTop: 10,
        padding: 18,
        borderRadius: 14,
        backgroundColor: '#d4fff9',

    },
    subjectTextStyle: {
        marginTop: 4,
        marginLeft: 6,
        fontSize: 18,
        fontWeight: 'bold'
    },
    courseCodeTextStyle: {
        color: '#6a7372',
        marginVertical: 6,
        marginLeft: 6,
    },
    facultyNameStyle: {
        color: '#6a7372',
        marginTop: 16,
        marginLeft: 6,
    },
    todaysTopicStyle: {
        color: '#6a7372',
        marginLeft: 6,
        marginTop: 10
    }

})