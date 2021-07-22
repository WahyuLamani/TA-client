import React from 'react'
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { Logo } from '../../assets'

const Login = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <View style={{ marginBottom: 15 }}>
                <TextInput placeholder="Email" style={styles.text} />
                <TextInput placeholder="Password" style={styles.text} />
            </View>
            <Button title="Login" color="#2b4599" />
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
        marginBottom: 40
    },
    text: {
        marginBottom: 16,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#8484fa',
        borderRadius: 100
    }
})
