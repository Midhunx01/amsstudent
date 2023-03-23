import { View, Text, StyleSheet, ScrollView} from 'react-native'


import Time from '../components/constants/Time'
import ActiveSchedule from '../components/views/ActiveSchedule'
import InactiveSchedule from '../components/views/InactiveSchedule'


export default function ScheduleScreen() {
    return (
        <View style={styles.rootViewContainer} >
            <View style={styles.dateContainer} >
                <Text style={styles.dateText} > 21 March</Text>
                <Text style={styles.boldText} > Today </Text>
            </View>
            <ScrollView>
            <View style={styles.scheduleViewStyle}>
                <Time startTime='09:00' endTime='9:50'/>
                <InactiveSchedule subTitle='Mobile Computing' code='CST 476' facultyName='Sajeena Shaji'
                    todaysTopic='Not Updated' />
            </View>
            <View style={styles.scheduleViewStyle}>
                <Time startTime='09:50' endTime='10:50'/>
                <ActiveSchedule subTitle='Network Security And Protocol' code='CST 434' facultyName='Chithra Rani PR'
                    todaysTopic='Not Updated' />
            </View>
            <View style={styles.scheduleViewStyle}>
                <Time startTime='11:10' endTime='12:10'/>
                <InactiveSchedule subTitle='Distributed Computing' code='CST 402' facultyName='Safiya KM'
                    todaysTopic='Not Updated' />
            </View>
            <View style={styles.scheduleViewStyle}>
                <Time startTime='12:10' endTime='1:00'/>
                <InactiveSchedule subTitle='Network Security And Protocol' code='CST 434' facultyName='Chithra Rani PR'
                    todaysTopic='Not Updated' />
            </View>
            <View style={styles.scheduleViewStyle}>
                <Time startTime='01:50' endTime='4:30'/>
                <InactiveSchedule subTitle='Project Phase II' code='CSD 416' facultyName='Chithra Rani PR, Shanavas KA'
                    todaysTopic='Not Updated' />
            </View>

            </ScrollView>



        </View>
    )

}

const styles = StyleSheet.create({
    rootViewContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    dateContainer: {
        marginTop: 60,
        marginLeft: 16
    },
    dateText: {
        color: '#A49EA5',
        fontSize: 20
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 30
    },
    scheduleViewStyle: {
        flexDirection: 'row',
    }

})