import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconHome, IconHomeActive, IconUser, IconUserActive, IconBox, IconBoxActive } from '../../assets'
import { DefaultColor } from '../../utilities/const'


const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
    const Icon = () => {
        if (label === "Home") return isFocused ? <IconHomeActive /> : <IconHome />
        if (label === "Order") return isFocused ? <IconBoxActive /> : <IconBox />
        if (label === "Akun") return isFocused ? <IconUserActive /> : <IconUser />

        return <IconHome />
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
            <Icon />
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: (isFocused) => ({
        fontSize: 13,
        color: isFocused ? DefaultColor : '#030104',
        marginTop: 5
    })
})
