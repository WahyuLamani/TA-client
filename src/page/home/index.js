import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions } from 'react-native'
import { BgHeader, Logo } from '../../assets'

const Home = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={BgHeader} style={styles.background}>
                <Image source={Logo} style={styles.logo} />
                <View style={styles.headerContent}>
                    <Text style={styles.text1}>Welcome,</Text>
                    <Text style={styles.text2}>Wahyu Lamani</Text>
                </View>
            </ImageBackground>
        </View >
    )
}

export default Home

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        width: windowWidth,
        height: windowHeight * 0.31,
        paddingHorizontal: 25,
        paddingTop: 11
    },
    logo: {
        width: windowWidth * 0.45,
        height: windowHeight * 0.07
    },
    headerContent: {
        marginTop: windowHeight * 0.02
    },
    text1: {
        fontSize: 40,
        fontFamily: 'TitilliumWeb-Regular'
    },
    text2: {
        fontSize: 20,
        fontFamily: 'TitilliumWeb-Bold'
    }
})
