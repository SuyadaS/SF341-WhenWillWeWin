import React from 'react';
import {ImageBackground, StyleSheet, View, Text, Button, Image} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        
        backgroundColor: '#AED6F1',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'white',textAlign: 'right'}}>RISK ASSESSMENT</Text>
      <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white',textAlign: 'right'}}>FOR COVID-19 INFECTION{"\n"}</Text>
      <Image source={require('../SF341-Proj/img/icon.png')} style={{width: 180,height:180}}></Image>
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

      <Button title="Ready" color="#154360" />
    </View>
  );
};

export default App;
