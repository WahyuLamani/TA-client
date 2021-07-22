import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Akun, Splash, Order, Login } from '../page'
import { BottomNavigator } from '../komponen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Main = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Order" component={Order} />
            <Tab.Screen name="Akun" component={Akun} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
