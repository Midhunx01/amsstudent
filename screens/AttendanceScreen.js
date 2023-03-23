import { View, StyleSheet, ScrollView } from 'react-native'


import AttendanceSubjectView from '../components/views/AttendanceSubjectView'


export default function AttendanceScreen() {
    return (
        <View style={styles.rootContainer}>
            <ScrollView>
                <AttendanceSubjectView subjectName='CST 404 Comprehensive Course Viva' percentage='85%' />
                <AttendanceSubjectView subjectName='CST 402 Mobile Computing' percentage='75%' />
                <AttendanceSubjectView subjectName='CST 403 Distributed Computing' percentage='70%' />
            </ScrollView>
        </View>

    )

}

const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 60,
    }
}) 