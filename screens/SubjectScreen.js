import { View, Text, StyleSheet, ScrollView } from 'react-native'



import SubjectViewContainer from '../components/views/SubjectViewContainer'


export default function SubjectScreen() {
    return (
        <View style={styles.rootContainer} >
            <ScrollView>
                <SubjectViewContainer subjectName='CST 404 Comprehensive Course Viva' />
                <SubjectViewContainer subjectName='CST 402 Mobile Computing' />
                <SubjectViewContainer subjectName='CST 403 Distriputed Computing' />
            </ScrollView>
        </View>

    )

}

const styles = StyleSheet.create({
    rootContainer: {
        marginTop: 60
    },
})