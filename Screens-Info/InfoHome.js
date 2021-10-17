import React, { Component } from 'react'
import {StyleSheet,ImageBackground, Button, View, Text,} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Home({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./0infohome.png')} resizeMode="cover" style={styles.image}>
                <Button
                    title="Go to Emergency call"
                    style={styles.button}
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
            </ImageBackground>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    button: {
        scaleX: 20,
    }
  });

export default Home;