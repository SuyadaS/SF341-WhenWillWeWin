import React, { useState } from "react";
import {Text, StyleSheet, View, Button } from "react-native";
import CheckBox from 'react-native-checkbox';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RadioButton } from 'react-native-paper';


function Risk3({navigation , route}) {
  const [count,setCounter] = useState(route.params.count);
  const [value3, setValue3] = useState(false);
  const [value4, setValue4] = useState(false);

  const setCount = () => {
    setCounter(count + 1);
  };

  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>{"\n"}RISK ASSESSMENT  </Text>
        <Text style={{ fontSize: 15, textAlign: 'center'}}>{"\n"}ท่านมีประวัติเสี่ยงต่อการติดเชื้อหรือไม่</Text>
        <Text style={{ textAlign: 'center'}}>_____________________________________________________{"\n\n"}</Text>
        <Text style={{ textAlign: 'left'}}>{"\t"}ข้อที่ 2 : ท่านทำงานในสถานกักกันโรค</Text>
      <Text>                  (State quarantine หรือ locat quarantine){"\n"}</Text>
      <View style={styles.checkboxContainer}>
        <RadioButton.Group onValueChange={newValue => setValue3(newValue)} value={value3}>
          <View style={{flexDirection: "row"}}>
            <RadioButton 
            value="yes3" 
            onPress={setCount}
            />
            <Text>YES</Text>
          </View>
          <View style={{flexDirection: "row"}}>
            <RadioButton value="no3" />
            <Text>NO</Text>
          </View>
        </RadioButton.Group>
      </View>
        <Text style={{ textAlign: 'left'}}>{"\t"}ข้อที่ 3 : มีประวัติสัมผัสกับผู้ป่วยยืนยันโรคติดเชื้อไวรัส COVID-19{"\n"}</Text>
        <View style={styles.checkboxContainer}>
          <RadioButton.Group onValueChange={newValue => setValue4(newValue)} value={value4}>
            <View style={{flexDirection: "row"}}>
              <RadioButton 
              value="yes4" 
              onPress={setCount}
              />
              <Text>YES</Text>
            </View>
            <View style={{flexDirection: "row"}}>
              <RadioButton value="no4" />
              <Text>NO</Text>
            </View>
          </RadioButton.Group>
        </View>
        {/* <Text>{count}</Text> */}

        <View style={styles.buttonContainer}> 
            <Button style={styles.button}
            title="next" 
            color="#154360" 
            onPress={() => 
              navigation.navigate('Risk4',{count})}
            />
        </View>
    </View>
    

    
  );
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
      marginTop:100,
      width:90,
      alignSelf:"center"
  }
});

export default Risk3;