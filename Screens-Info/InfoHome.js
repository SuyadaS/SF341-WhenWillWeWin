import React, { Component } from 'react'
import {Button, View, Text,} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Home({navigation}) {
    return (
        <View style={{backgroundColor: '#AED6F1',flex: 1}}>
            <Button
                title="Go to Emergency call"
                onPress={() =>
                    navigation.navigate('Emergency')}
            />
            <Button
                title="Go to Donation"
                onPress={() =>
                    navigation.navigate('Donation')}
            />
            <Button
                title="Go to Related Apps"
                onPress={() =>
                    navigation.navigate('Related')}
            />
        </View> 
    )
}

export default Home;