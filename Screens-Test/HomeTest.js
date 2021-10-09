import React, { Component } from 'react'
import {Button, View, Text,} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Test({navigation}) {
    return (
        <View style={{backgroundColor: '#AED6F1',flex: 1}}>
            <Button
                title="Go to Form"
                onPress={() =>
                    navigation.navigate('Risk1')}
            />
            <Button
                title="Go to Information"
                onPress={() =>
                    navigation.navigate('InfoHome')}
            />
        </View> 
    )
}

export default Test;