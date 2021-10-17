import React, { Component } from 'react'
import { Pressable,StyleSheet,ImageBackground, View, Text, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Don({navigation}) {
    return (
        
        <View style={{backgroundColor: '#AED6F1',flex: 1}}>
            <ImageBackground source={require('./0donatelist.png')} resizeMode="cover" style={styles.image}>
                <View style={styles.btcontainer}>
                    <Pressable style={styles.button}
                        onPress={() =>
                            navigation.navigate('Siriraj')}
                    >
                        <Text style={styles.text}>โรงพยาบาลศิริราช</Text>
                    </Pressable>

                    <Pressable style={styles.button}
                        onPress={() =>
                            navigation.navigate('Chula')}
                    >
                        <Text style={styles.text}>โรงพยาบาลจุฬาลงกรณ์</Text>
                    </Pressable>

                    <Pressable style={styles.button}
                        onPress={() =>
                            navigation.navigate('Rajvidi')}
                    >
                        <Text style={styles.text}>โรงพยาบาลราชวิถี</Text>
                    </Pressable>

                    <Pressable style={styles.button}
                        onPress={() =>
                            navigation.navigate('Rama')}
                    >
                        <Text style={styles.text}>โรงพยาบาลรามาธิบดี</Text>
                    </Pressable>

                    <Pressable style={styles.button}
                        onPress={() =>
                            navigation.navigate('Redcross')}
                    >
                        <Text style={styles.text}>สภากาชาดไทย</Text>
                    </Pressable>
                </View>
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
    btcontainer: {
        flex: 0.25,
      },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginVertical: 10,
        marginHorizontal: 100,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#66ccff',
      },
      text: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      }
  });

export default Don;