import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, ScrollView } from 'react-native'
import { BgHeader, Logo } from '../../assets'
import axios from 'axios'



const Home = () => {

    const [token, setToken] = useState('')
    const [userable, setUserable] = useState({})
    const instance = axios.create({
        baseURL: 'http://103.56.149.35:10000/api/',
        timeout: 1000,
        headers: { 'Authorization': 'Bearer ' + token }
    });
    const apiHome = async () => {
        await instance.get('/home')
            .then(res => {
                return res.data
            }).then(res => {
                console.log(res)
            }).catch(e => {
                console.log(e)
            })
    }
    useEffect(() => {
        const getToken = async () => {
            const token = await AsyncStorage.getItem('token')
            return token
        }
        getToken().then(function (data) {
            setToken(data)
        })

        const getUserable = async () => {
            const userable = await AsyncStorage.getItem('userable')
            return JSON.parse(userable)
        }
        getUserable().then(function (data) {
            setUserable(data)
        })
        apiHome()
        console.log(token)
    }, [])
    return (
        <ScrollView>
            <View style={styles.container}>
                <ImageBackground source={BgHeader} style={styles.background}>
                    <Image source={Logo} style={styles.logo} />
                    <View style={styles.headerContent}>
                        <Text style={styles.text1}>Welcome,</Text>
                        <Text style={styles.text2}>{userable.name}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.body}>

                </View>
            </View >
        </ScrollView>
    )
}

export default Home

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        padding: 10,

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
