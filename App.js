import React, { Component } from 'react'
import { View, Text, Checkbox } from 'react-native'

const App = () => {
    return (
        
        <View style={{backgroundColor: '#AED6F1',flex: 1}}>
            
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>{"\n"}RISK ASSESSMENT  </Text>
            <Text style={{ fontSize: 15, textAlign: 'center'}}>{"\n"}ท่านมีประวัติเสี่ยงต่อการติดเชื้อหรือไม่</Text>
            <Text style={{ textAlign: 'center'}}>_____________________________________________________{"\n"}</Text>

            <Text style={{ textAlign: 'left'}}>{"\t"}ข้อที่ 1 : ท่านเดินทางมาจากหรืออาศัยในพื้นที่</Text>
            <Text>                  ที่มีรายงานการติดเชื้อ COVID-19 ใน 1 เดือนที่ผ่านมา</Text>
            <Text style={{ textAlign: 'left',}}>{"\t"}ข้อที่ 1.1 : ท่านเดินทางมาจากต่างประเทศ ทุกประเทศ</Text>
            <Text>                  ในช่วง 1 เดือนที่ผ่านมาหรือไม่{"\n"}</Text>



            <Text style={{ textAlign: 'left',}}>{"\t"}ข้อที่ 1.2 : (ภายในประเทศไทย) ท่านได้เดินทางมาจาก</Text>
            <Text>                  หรืออาศัยอยู่ในพื้นที่มีการายงานการติดเชื้อ</Text>
            <Text>                  ในช่วง 1 เดือนที่ผ่านมาหรือไม่</Text>
            <Text style={{textAlign: 'center', color: 'red'}}>* * พื้นที่เสี่ยงโปรดดูประกาศตามแต่ละพื้นที่ * *{"\n"}</Text>
            <Text style={{ textAlign: 'left'}}>{"\t"}ข้อที่ 2 : ท่านทำงานในสถานกักกันโรค</Text>
            <Text>                  (State quarantine หรือ locat quarantine){"\n"}</Text>
            <Text style={{ textAlign: 'left'}}>{"\t"}ข้อที่ 3 : มีประวัติสัมผัสกับผู้ป่วยยืนยันโรคติดเชื้อไวรัส COVID-19{"\n"}</Text>
            <Text style={{ textAlign: 'left'}}>{"\t"}ข้อที่ 4 : เป็นบุคคลทางการแพทย์หรือสาธารณสุข </Text>
            <Text>                  ทั้งสถานพยาบาล,คลินิก,ทีมสอบสวนโรค หรือร้านยา{"\n"}</Text>
            <Text style={{ textAlign: 'left'}}>{"\t"}ข้อที่ 5 : มีประวัติไปในสถานที่ประชาชนหนาแน่น </Text>
            <Text>                  ชุมนุม หรือที่มีการรวมกลุ่มคน เช่น ตลาดนัด</Text>
            <Text>                  ห้างสรรพสินค้า สถานพยาบาลหรือขนส่งสาธารณะ</Text>
            <Text>                  ที่พบผู้สงสัยหรือยืนยัน COVID-19</Text>
            <Text>                  ในช่วง 1 เดือนที่ผ่านมาหรือไม่</Text>
        </View>
        

        
        
    )
}

export default App 
