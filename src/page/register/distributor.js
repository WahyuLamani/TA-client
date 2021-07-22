import React from 'react'
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { Logo } from '../../assets'

const RegisterDistributor = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <View style={{ marginBottom: 15 }}>
                <TextInput placeholder="Nama" style={styles.text} />
                <TextInput placeholder="Email" style={styles.text} />
                <TextInput multiline={true} numberOfLines={4} placeholder="Alamat Lengkap" style={styles.text} />
                <TextInput placeholder="No Telepon" style={styles.text} />
                <TextInput secureTextEntry={true} placeholder="Password" style={styles.text} />
                <TextInput secureTextEntry={true} placeholder="Konfirmasi Password" style={styles.text} />
            </View>
            <Button title="Register" color="#2b4599" />
            <View style={styles.register}>
                <Text style={{ color: 'blue' }}
                    onPress={() => navigation.navigate('RegisterAgent')}>
                    Agent baru ?
                </Text>
                <Text style={{ color: 'blue' }}
                    onPress={() => navigation.navigate('Login')}>
                    Login
                </Text>
            </View>
        </View>
    )
}

export default RegisterDistributor

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
        borderWidth: 0.4,
        borderColor: '#8484fa',
        borderRadius: 4
    },
    register: {
        marginTop: 7,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
