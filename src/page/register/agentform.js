import React from 'react'
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { Logo } from '../../assets'

const AgentForm = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <View style={{ marginBottom: 15 }}>
                <TextInput multiline={true} numberOfLines={4} placeholder="Alamat Lengkap" style={styles.text} />
                <TextInput placeholder="No Telepon" style={styles.text} />
                <TextInput secureTextEntry={true} placeholder="Password" style={styles.text} />
                <TextInput secureTextEntry={true} placeholder="Konfirmasi Password" style={styles.text} />
            </View>
            <Button title="Submit" color="#2b4599" />
        </View>
    )
}

export default AgentForm

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
})
