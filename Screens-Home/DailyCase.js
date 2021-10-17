import React, { Component } from 'react'
import { StyleSheet, View, Text, Checkbox, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            date: null,
            newCase: null,
            totalCase: null,
            newDeath: null,
        }
    }

    componentDidMount() {
        return fetch('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all').then((response) => response.json()).then((responseJson) => {
            this.setState({
                isLoading: false,
                date: responseJson[0].txn_date,
                newCase: responseJson[0].new_case,
                totalCase: responseJson[0].total_case,
                newDeath: responseJson[0].new_death
            })

        }).catch((error) => {
            console.log(error)
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <Text>loading</Text>
                </View>
            )
        } else {

            return (
                <View style={styles.container}>
                    <Text style={styles.date}>{this.state.date.split("-")[2]} {this.state.date.split("-")[1]} {this.state.date.split("-")[0]}</Text>
                    <Text>ผู้ติดเชื้อวันนี้</Text>
                    <Text style={styles.numberOfCase}>{this.state.newCase}</Text>
                    <Text>ผู้ป่วยสะสมวันนี้</Text>
                    <Text style={styles.numberOfCase}>{this.state.totalCase}</Text>
                    <Text>เสียชีวิตเพิ่มวันนี้</Text>
                    <Text style={styles.numberOfCase}>{this.state.newDeath}</Text>
                    <Button
                        title="ข้อมูล"
                        color="#841584"
                        onPress={() =>
                            navigation.navigate('Emergency')}
                    />
                    <Button
                        title="แบบประเมินความเสี่ยง"
                        color="#841584"
                    />
                </View>
            )

        }

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#AED6F1',
        flex: 1,
   
        alignItems: 'center',
        justifyContent: 'center',
    },
    date:{
        color: "#FFF000",
        fontSize: 30
    },

    numberOfCase: {
        color: '#FF0000',
        fontSize: 30
    }
})
