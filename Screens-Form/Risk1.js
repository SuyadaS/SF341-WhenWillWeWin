import React from 'react';
import {ImageBackground, StyleSheet, View, Text, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Risk1({navigation}) {
  return (
    <View
      style={{
        
        backgroundColor: '#AED6F1',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white',textAlign: 'right'}}>RISK ASSESSMENT</Text>
      <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white',textAlign: 'right'}}>FOR COVID-19 INFECTION{"\n"}</Text>
      <Image source={require('../SF341-Proj/img/icon.png')} style={{width: 160,height:160}}></Image>
      <Text style={{color: '#229954'}}>
      {"\n"}กรุณาให้ข้อมูลตามความเป็นจริงเพื่อประโยชน์ของท่าน
      </Text>
      <Text style={{color: '#229954'}}>
        การมาที่โรงพยาบาลโดยไม่มีความจำเป็น
      </Text>
      <Text style={{color: '#229954'}}>
        อาจทำให้ท่านเสี่ยงการติดเชื้อมากขึ้น
      </Text>
      <Text>_____________________________________________________{"\n"}</Text>
      <Text>หมายเหตุ จุดประสงค์ของแบบสอบถามนี้</Text>
      <Text>เพื่อการประชาสัมพันธ์การดูแลตนเองให้ปลอดภัย</Text>
      <Text>และลดการมาโรงพยาบาลโดยไม่จำเป็น</Text>
      <Text>สำหรับประชาชนทั่วไป{"\n"}</Text>

      <Text style={{color: 'grey'}}>แบบสอบถามนี้เก็ฐข้อมูลโดยไม่ระบุตัวตน</Text>
      <Text style={{color: 'grey'}}>เพื่อนำไปพัฒนาแบบสอบถามให้แม่นยำมากขึ้น{"\n\n"}</Text>

      <View style={styles.buttonContainer}> 
            <Button style={styles.button}
            title="ready" 
            color="#154360" 
            onPress={() =>
              navigation.navigate('Risk2')}
            />
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
    buttonContainer:{
        marginTop:10,
        width:90,
        alignSelf:"center"
    }

})
export default Risk1;
