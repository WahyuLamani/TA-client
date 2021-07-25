import React, { useState } from 'react'
import { Image, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { Logo } from '../../assets'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const doLogin = () => {
        axios.post('http://103.56.149.35:10000/api/login', {
            email,
            password
        }).then(function (val) {
            console.log(val.data);
            if (val.data.errors) {
                alert(JSON.stringify(val.data.errors))
            } else {
                console.log(val)
                AsyncStorage.setItem('user', JSON.stringify(val.data.user))
                AsyncStorage.setItem('token', (val.data.access_token))
                AsyncStorage.setItem('userable', JSON.stringify(val.data.user.userable))
                // AsyncStorage.setItem('user', JSON.stringify(val.data.user))
                navigation.replace('Main')
            }
        })
            .catch(function (error) {
                console.log(error)
                alert("email atau password salah");
            });
    };


    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <View style={{ marginBottom: 15 }}>
                <TextInput placeholder="Email" onChangeText={(value) => setEmail(value)} style={styles.text} />
                <TextInput placeholder="Password" onChangeText={(value) => setPassword(value)} style={styles.text} secureTextEntry={true} />
            </View>
            <Button title="login" color="#2b4599" onPress={(doLogin)} />
            <View style={styles.register}>
                <Text style={{ color: 'blue' }}
                    onPress={() => navigation.navigate('RegisterAgent')}>
                    Agent Baru ?
                </Text>
                <Text style={{ color: 'blue' }}
                    onPress={() => navigation.navigate('RegisterDistributor')}>
                    Register sebagai distributor
                </Text>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#B3B3FF',
        padding: 50,
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        marginBottom: 35,
        width: 276,
        height: 89
    },
    text: {
        marginBottom: 15,
        textAlign: 'center',
        borderWidth: 0.6,
        borderColor: '#8484fa',
        borderRadius: 100
    },
    register: {
        marginTop: 7,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#2b4599',
        padding: 10,
        width: '100%',
        marginTop: 16,
    }

})
