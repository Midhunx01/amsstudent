import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'



export default function HomeScreen() {
    return (
        <View style={styles.rootContainer} >
            <View style={styles.mainTextContainer} >
                <Text style={styles.mainText}>ILAHIA COLLEGE OF ENGINEERING AND TECHNOLOGY</Text>
            </View>
            <Text style={styles.eventText} >Events</Text>
            <ScrollView>
                <View >
                    <Image style={styles.imageView} source={require('../assets/event2.jpg')} />
                    <Image style={styles.imageView} source={require('../assets/event3.jpg')} />
                    <Image style={styles.imageView} source={require('../assets/event1.jpg')} />

                </View>
            </ScrollView>


        </View>

    )

};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    eventText: {
        marginLeft: 15,
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 28,
        color: '#A49EA5'

    },
    mainText: {
        marginTop: 60,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 21,
        fontFamily: 'Arial-BoldMT'

    },
    imageView: {
        marginTop: 30,
        resizeMode: 'contain',
        height: 400,
        width: 400
    }
})