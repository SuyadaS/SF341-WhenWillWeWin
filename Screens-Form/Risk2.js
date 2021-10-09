import React, { Component, useState } from "react";
import {Text, StyleSheet, View, Button } from "react-native";
import CheckBox from 'react-native-checkbox';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Risk2({navigation}) {
    const [isSelected, setSelection] = useState(false);
    return (
        
        <View style={styles.container}>
            
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>{"\n"}RISK ASSESSMENT  </Text>
            <Text style={{ fontSize: 15, textAlign: 'center'}}>{"\n"}ท่านมีประวัติเสี่ยงต่อการติดเชื้อหรือไม่</Text>
            <Text style={{ textAlign: 'center'}}>_____________________________________________________{"\n\n"}</Text>

            <Text style={{ textAlign: 'left'}}>{"\t"}ข้อที่ 1 : ท่านเดินทางมาจากหรืออาศัยในพื้นที่</Text>
            <Text>                  ที่มีรายงานการติดเชื้อ COVID-19 ใน 1 เดือนที่ผ่านมา</Text>
            <Text style={{ textAlign: 'left',}}>{"\t"}ข้อที่ 1.1 : ท่านเดินทางมาจากต่างประเทศ ทุกประเทศ</Text>
            <Text>                  ในช่วง 1 เดือนที่ผ่านมาหรือไม่{"\n"}</Text>
            <View style={styles.checkboxContainer}>
                <CheckBox style={styles.checkbox}
                    label='Yes'
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <CheckBox style={styles.checkbox}
                    label='No '
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
            </View>

            <Text style={{ textAlign: 'left',}}>{"\t"}ข้อที่ 1.2 : (ภายในประเทศไทย) ท่านได้เดินทางมาจาก</Text>
            <Text>                  หรืออาศัยอยู่ในพื้นที่มีการายงานการติดเชื้อ</Text>
            <Text>                  ในช่วง 1 เดือนที่ผ่านมาหรือไม่</Text>
            <Text style={{textAlign: 'center', color: 'red'}}>* * พื้นที่เสี่ยงโปรดดูประกาศตามแต่ละพื้นที่ * *{"\n"}</Text>
            <View style={styles.checkboxContainer}>
                <CheckBox style={styles.checkbox}
                    label='Yes'
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <CheckBox style={styles.checkbox}
                    label='No '
                    value={isSelected}
                onValueChange={setSelection}
                    style={styles.checkbox}
                />
            </View>

            <Text style={{ textAlign: 'left'}}>{"\t"}ข้อที่ 2 : ท่านทำงานในสถานกักกันโรค</Text>
            <Text>                  (State quarantine หรือ locat quarantine){"\n"}</Text>
            <View style={styles.checkboxContainer}>
                <CheckBox style={styles.checkbox}
                    label='Yes'
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
                <CheckBox style={styles.checkbox}
                    label='No '
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                />
            </View>

            <View style={styles.buttonContainer}> 
                <Button style={styles.button}
                title="next" 
                color="#154360" 
                onPress={() =>
                    navigation.navigate('Risk3')}
                />
            </View>
        </View>
        

        
        
    )
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#AED6F1',
      
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
      marginLeft: 55
    },
    checkbox: {
      alignSelf:"center",
      marginRight:0
      
      
    },
    label: {
      margin: 8,
    },
    buttonContainer:{
        marginTop:50,
        width:90,
        alignSelf:"center"
    }
  });

export default Risk2 
