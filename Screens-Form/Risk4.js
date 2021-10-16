import React, { useState } from "react";
import {Text, StyleSheet, View, Button } from "react-native";
import CheckBox from 'react-native-checkbox';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RadioButton } from 'react-native-paper';


function Risk4({navigation}) {
  const [count, setCounter] = useState(0);
  const [value5, setValue5] = useState(false);
  const [value6, setValue6] = useState(false);

  const setCount = () => {
    setCounter(count + 1);
  };

  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>{"\n"}RISK ASSESSMENT  </Text>
        <Text style={{ fontSize: 15, textAlign: 'center'}}>{"\n"}ท่านมีประวัติเสี่ยงต่อการติดเชื้อหรือไม่</Text>
        <Text style={{ textAlign: 'center'}}>_____________________________________________________{"\n\n"}</Text>
        <Text style={{ textAlign: 'left'}}>{"\t"}ข้อที่ 4 : เป็นบุคคลทางการแพทย์หรือสาธารณสุข </Text>
        <Text>                  ทั้งสถานพยาบาล,คลินิก,ทีมสอบสวนโรค หรือร้านยา{"\n"}</Text>
        <View style={styles.checkboxContainer}>
          <RadioButton.Group onValueChange={newValue => setValue5(newValue)} value={value5}>
            <View style={{flexDirection: "row"}}>
                <RadioButton 
                value="yes5" 
                onPress={setCount}/>
                <Text>YES</Text>
            </View>
            <View style={{flexDirection: "row"}}>
                <RadioButton value="no5" />
                <Text>NO</Text>
            </View>
          </RadioButton.Group>
        </View>
        <Text style={{ textAlign: 'left'}}>{"\t"}ข้อที่ 5 : มีประวัติไปในสถานที่ประชาชนหนาแน่น </Text>
        <Text>                  ชุมนุม หรือที่มีการรวมกลุ่มคน เช่น ตลาดนัด</Text>
        <Text>                  ห้างสรรพสินค้า สถานพยาบาลหรือขนส่งสาธารณะ</Text>
        <Text>                  ที่พบผู้สงสัยหรือยืนยัน COVID-19</Text>
        <Text>                  ในช่วง 1 {"\n"}</Text>

        <View style={styles.checkboxContainer}>
          <RadioButton.Group onValueChange={newValue => setValue6(newValue)} value={value6}>
            <View style={{flexDirection: "row"}}>
                <RadioButton 
                value="yes6" 
                onPress={setCount}
                />
                <Text>YES</Text>
            </View>
            <View style={{flexDirection: "row"}}>
                <RadioButton value="no6" />
                <Text>NO</Text>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.buttonContainer}> 
            <Button style={styles.button}
            title="done" 
            color="#154360" 
            onPress={() => 
              navigation.navigate('No')}
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
      marginTop:30,
      width:90,
      alignSelf:"center"
  }
});

export default Risk4;