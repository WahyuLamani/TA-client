import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect } from 'react'
import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native'
import { Logo, SplashScreen } from '../../assets'

const Splash = ({ navigation }) => {

    useEffect(() => {
        const _session = async () => {
            const login = await AsyncStorage.getItem('token')
            if (login) {
                navigation.replace('Main')
            } else {
                navigation.replace('Login')
            }
        }
        _session()
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
