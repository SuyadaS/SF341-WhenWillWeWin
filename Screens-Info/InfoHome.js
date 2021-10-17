import React, { Component } from 'react'
import { StyleSheet, ImageBackground, Button, View, Text, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('./0infohome.png')} resizeMode="cover" style={styles.image1}>
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Emergency')}
                            style={styles.roundButton1}
                        >
                            <Text style={{ color: "#052652", fontSize: 14 }}>สายด่วน</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Donation')}
                            style={styles.roundButton1}
                        >
                            <Text style={{ color: "#052652", fontSize: 14 }}>การบริจาค</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Related')}
                            style={styles.roundButton1}
                        >
                            <Text style={{ color: "#052652", fontSize: 14 }}>แอปพลิเคชั่นรับมือโควิด19</Text>
                        </TouchableOpacity>
                    </View>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AED6F1',
        justifyContent: "space-around",
        alignItems: 'center'
    },
    image2: {
        flex: 1,
        width: 400,
        bottom: -200,
        justifyContent: "center"
    },
    image1: {
        flex: 1,
        width: 400,
        justifyContent: "center"
    },
    button: {
        top: 50,
        marginBottom: 50,
        left: -20,
        flex: 1,
        alignItems: "center",


    },
    roundButton1: {
        marginTop: 60,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        borderRadius: 100,
        backgroundColor: '#F0FBFF',
    },
})

export default Home;

