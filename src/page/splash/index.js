import React, { useEffect } from 'react'
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native'
import { Logo, SplashScreen } from '../../assets'

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Main')
        }, 2000)
    }, [navigation])


    return (
        <ImageBackground source={SplashScreen} style={styles.background}>
            <Image source={Logo} style={styles.logo} />
        </ImageBackground >
    )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 276,
        height: 89
    }
})
