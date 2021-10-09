import React, { useState } from "react";
import {Text, StyleSheet, View, Button } from "react-native";
import CheckBox from 'react-native-checkbox';



const Risk3 = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>{"\n"}RISK ASSESSMENT  </Text>
        <Text style={{ fontSize: 15, textAlign: 'center'}}>{"\n"}ท่านมีประวัติเสี่ยงต่อการติดเชื้อหรือไม่</Text>
        <Text style={{ textAlign: 'center'}}>_____________________________________________________{"\n\n"}</Text>
        <Text style={{ textAlign: 'left'}}>{"\t"}ข้อที่ 3 : มีประวัติสัมผัสกับผู้ป่วยยืนยันโรคติดเชื้อไวรัส COVID-19{"\n"}</Text>
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
        <Text style={{ textAlign: 'left'}}>{"\t"}ข้อที่ 4 : เป็นบุคคลทางการแพทย์หรือสาธารณสุข </Text>
        <Text>                  ทั้งสถานพยาบาล,คลินิก,ทีมสอบสวนโรค หรือร้านยา{"\n"}</Text>
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
        <Text style={{ textAlign: 'left'}}>{"\t"}ข้อที่ 5 : มีประวัติไปในสถานที่ประชาชนหนาแน่น </Text>
        <Text>                  ชุมนุม หรือที่มีการรวมกลุ่มคน เช่น ตลาดนัด</Text>
        <Text>                  ห้างสรรพสินค้า สถานพยาบาลหรือขนส่งสาธารณะ</Text>
        <Text>                  ที่พบผู้สงสัยหรือยืนยัน COVID-19</Text>
        <Text>                  ในช่วง 1 {"\n"}</Text>

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
            title="done" 
            color="#154360" />
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
      marginTop:50,
      width:90,
      alignSelf:"center"
  }
});

export default Risk3;