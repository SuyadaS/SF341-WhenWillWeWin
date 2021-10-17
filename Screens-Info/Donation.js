import React, { Component } from 'react'
import { StyleSheet,ImageBackground, View, Text, Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Don({navigation}) {
    return (
        
        <View style={{backgroundColor: '#AED6F1',flex: 1}}>
            <ImageBackground source={require('./0donatelist.png')} resizeMode="cover" style={styles.image}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>{"\n"}Donation </Text>
                <Button
                    title="โรงพยาบาลศิริราช"
                    onPress={() =>
                        navigation.navigate('Siriraj')}
                />
                <Button
                    title="โรงพยาบาลจุฬาลงกรณ์"
                    onPress={() =>
                        navigation.navigate('Chula')}
                />
                <Button
                    title="โรงพยาบาลราชวิถี"
                    onPress={() =>
                        navigation.navigate('Rajvidi')}
                />
                <Button
                    title="โรงพยาบาลรามาธิบดี"
                    onPress={() =>
                        navigation.navigate('Rama')}
                />
                <Button
                    title="สภากาชาดไทย"
                    onPress={() =>
                        navigation.navigate('Redcross')}
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
    button: {}
  });

export default Don;