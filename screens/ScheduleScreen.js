import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'


export default function ScheduleScreen() {
    return (
        <View>
            <ScrollView>
                <View style={styles.schrollViewContainer}>
                    <Text style={styles.dateText} >Tuesday, 26/03/2023</Text>
                </View>

            </ScrollView>

        </View>
    )

}

const styles = StyleSheet.create({
    schrollViewContainer: {
        marginTop: 20,
        marginHorizontal: 18,
        padding: 14,
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 16,
        alignItems: 'center'
    },
    dateText: {
        fontWeight: 'bold'
    }
})