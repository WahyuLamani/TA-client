import React, { useState } from 'react'
import { Image, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { Logo } from '../../assets'
import axios from 'axios'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const doLogin = () => {
        axios.post('http://103.56.149.35:10000/api/login', {
            email,
            password
        }).then(function (response) {
            // handle success
            console.log(JSON.stringify(response.data));
        })
            .catch(function (error) {
                // handle error
                console.log(error)
                console.log(error.message);
            });
    };


    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <View style={{ marginBottom: 15 }}>
                <TextInput placeholder="Email" onChangeText={(value) => setEmail(value)} style={styles.text} />
                <TextInput placeholder="Password" onChangeText={(value) => setPassword(value)} style={styles.text} secureTextEntry={true} />
            </View>
            <Button title="login" color="#2b4599" onPress={doLogin} />
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
