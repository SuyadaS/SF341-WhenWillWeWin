import React, { Component } from 'react';
import { ImageBackground,StyleSheet, View, Text,} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default class tableExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerData:  ["วัตถุประสงค์", "เบอร์โทรศัพท์"],
            tableContents: [
                ["แจ้งเหตุ ร้องเรียน", "1111"],
                ["สอบถามอาการ", "1422",],
                ["สอบถามการเข้ารักษาที่โรงพยาบาล", "1668",],
                ["เจ็บป่วยฉุกเฉิน", "1669",],
                ["ปรึกษาสุขภาพจิต", "1323",],
                ["สิทธิ์บัตรทอง", "1330",],
                ["สิทธิ์ประกันสังคม", "1506",],
                ["ปรึกษาป่วยวิกฤต (UCEP)", "028-721669",]] }
        }
        
        render() {
            const state = this.state;
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('./0emergencycall.png')} resizeMode="cover" style={styles.image}>
                        <Table>
                            <Row data={state.headerData} style={styles.head} textStyle={styles.text}/>
                            <Rows data={state.tableContents} textStyle={styles.text}/>
                        </Table>
                    </ImageBackground>
                </View>
            )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#AED6F1' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },
    container: {
        flex: 1,
      },
    image: {
        flex: 1,
        justifyContent: "center"
      }
  });
