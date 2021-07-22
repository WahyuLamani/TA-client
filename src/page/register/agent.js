import React from 'react'
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { Logo } from '../../assets'

const RegisterAgent = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <View style={styles.directional}>
                <TextInput placeholder="Email" style={styles.text} />
                <Button title="Login" color="#2b4599" onPress={() => alert('hello')} />
            </View>
            <View style={styles.register}>
                <Text style={{ color: 'blue' }}
                    onPress={() => navigation.navigate('Login')}>
                    Login
                </Text>
                <Text style={{ color: 'blue' }}
                    onPress={() => navigation.navigate('RegisterDistributor')}>
                    Register sebagai Distributor
                </Text>
            </View>
        </View>
    )
}

export default RegisterAgent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#B3B3FF',
        padding: 15,
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
        borderRadius: 50
    },
    register: {
        marginTop: 7,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    directional: {
        marginBottom: 15,
    }
})
