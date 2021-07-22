import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome Agent !!</Text>
            <View style={{ padding: 10 }}>
                <Text>Post</Text>
                <Text>Container</Text>
            </View>
        </View >
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        margin: 0,
        backgroundColor: '#bfcbf5'
    },
    header: {
        fontSize: 30,
        fontVariant: ['small-caps'],
        textAlign: 'center',
        marginTop: 1

    }
})
