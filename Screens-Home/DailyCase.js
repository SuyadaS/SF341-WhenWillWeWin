import React, { Component } from 'react'
import { StyleSheet, View, Text,ImageBackground, Checkbox, Button, Image } from 'react-native'
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
                    <Image
                        style={styles.tinyLogo}
                        source={require('../img/icon_app.png')}
                    />
                    <Text>loading</Text>
                </View>
            )
        } else {

            return (
                <View style={styles.container}>
                    
                    <Image
                        style={styles.image}
                        source={require('../img/icon_app.png')}
                    />
                    <Text style={styles.date}>{this.state.date.split("-")[2]}/{this.state.date.split("-")[1]}/{this.state.date.split("-")[0]}</Text>
                    <View style={styles.information}>
                        <Text style={{fontSize: 20 }}>ผู้ติดเชื้อวันนี้</Text>
                        <Text style={styles.numberOfCase}>{this.state.newCase}</Text>
                        <Text style={{fontSize: 20}}>ผู้ป่วยสะสมวันนี้</Text>
                        <Text style={styles.numberOfCase}>{this.state.totalCase}</Text>
                        <Text style={{fontSize: 20}}>เสียชีวิตเพิ่มวันนี้</Text>
                        <Text style={styles.numberOfCase}>{this.state.newDeath}</Text>
                    </View>
                    

                    <View style={styles.inLine}>
                        <Button
                            title="ข้อมูล"
                            color="#154360"
                            onPress={() => this.props.navigation.navigate('InfoHome')}
                        />
                        <Button
                            title="แบบประเมินความเสี่ยง"
                            color="#154360"
                            onPress={() => this.props.navigation.navigate('Risk1')}
                        />
                    </View>

                </View>
            )

        }

    }
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#AED6F1',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    date: {
        fontWeight: 'bold',
        color: "#154360",
        fontSize: 30
    },

    image: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
      },
    inLine: {
        flexDirection: 'row',
    },

    numberOfCase: {
        fontWeight: 'bold',
        color: '#FF0000',
        fontSize: 30
    },

    tinyLogo: {
        width: 150,
        height: 150,
    },

    information: {
        height: 250,
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})
