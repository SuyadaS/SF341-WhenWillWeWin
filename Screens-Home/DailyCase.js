import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground, Checkbox, Button, Image, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { white } from 'react-native-paper/lib/typescript/styles/colors';


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
                    <ImageBackground source={require('./bg-home.png')} resizeMode="cover" style={styles.image1}>
                        <Image
                            style={styles.image}
                            source={require('../img/icon_app.png')}
                        />

                        <View style={styles.information}>
                            <Text style={styles.date}>{this.state.date.split("-")[2]}/{this.state.date.split("-")[1]}/{this.state.date.split("-")[0]}</Text>
                            <Text style={{ fontSize: 20, marginBottom: 5 }}>ผู้ติดเชื้อวันนี้</Text>
                            <Text style={styles.numberOfCase}>{this.state.newCase}</Text>
                            <Text style={{ fontSize: 20, marginBottom: 5 }}>ผู้ป่วยสะสมวันนี้</Text>
                            <Text style={styles.numberOfCase}>{this.state.totalCase}</Text>
                            <Text style={{ fontSize: 20, marginBottom: 5 }}>เสียชีวิตเพิ่มวันนี้</Text>
                            <Text style={styles.numberOfCase}>{this.state.newDeath}</Text>
                        </View>

                        <View style={styles.iconLine} >
                            <Image
                                style={styles.right}
                                source={require('./inform.png')}
                            />
                            <Image
                                style={styles.left}
                                source={require('./icon.png')}
                            />

                        </View>

                        <View style={styles.inLine}>
                            <TouchableOpacity
                                onPress={() =>
                                    this.props.navigation.navigate('InfoHome')}
                                style={styles.roundButton}
                            >
                                <Text style={{ color: "#154360", fontSize: 16 }}>ข้อมูล</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() =>
                                    this.props.navigation.navigate('Risk1')}
                                style={styles.roundButton}
                            >
                                <Text style={{ color: "#154360", fontSize: 16 }}>แบบประเมินความเสี่ยง</Text>
                            </TouchableOpacity>

                        </View>
                    </ImageBackground>
                </View>
            )

        }

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    date: {
        fontWeight: 'bold',
        color: "#154360",
        fontSize: 30,
        marginBottom: 30,
    },

    icon: {
        width: 40,
        height: 40,
    },
    right: {
        width: 30,
        height: 30,
        marginLeft: 100
    },
    left: {
        width: 30,
        height: 30,
        marginLeft: 95
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 40,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: '#FFFFFF',
    },
    iconLine: {
        marginTop: 130,
        width: 400,
        flexDirection: 'row',
    },

    inLine: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    numberOfCase: {
        fontWeight: 'bold',
        color: '#FF0000',
        fontSize: 30,
        marginBottom: 5
    },

    information: {
        marginTop: 100,
        height: 250,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image1: {
        width: 400,
        flex: 1,
        alignItems: 'center',
    },
    roundButton: {
        marginLeft: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 100,
        backgroundColor: '#F0FBFF',
    },
})
