import { View, Text, StyleSheet } from "react-native";

export default function SsubjectViewContainer({subjectName}) {
    return (
        <View style={styles.subjectView} >
            <Text style={styles.subjectTextStyle}>{subjectName}</Text>
            <Text style={styles.facultyNameStyle}>faculty Name:</Text>
            <Text style={styles.secondaryText}>Attendance</Text>
            <Text style={styles.secondaryText}>Assignments</Text>
            <Text style={styles.secondaryText}>Notes</Text>
            <Text style={styles.secondaryText}>Internal Mark</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    subjectView: {
        marginHorizontal: 10,
        marginTop: 10,
        padding: 16,
        borderRadius: 14,
        backgroundColor: '#7F86FF',

    },
    subjectTextStyle: {
        color: 'white',
        marginTop: 4,
        marginLeft: 1,
        fontSize: 18,
        fontWeight: 'bold'
    },
    facultyNameStyle: {
        color: 'white',
        marginTop: 12,
        marginLeft: 6,
    },
    secondaryText: {
        color: 'white',
        marginTop: 6,
        marginLeft: 6
    }


})

