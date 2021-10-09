import React, { Component } from 'react'
import { Linking, View, Button, Text,} from 'react-native'
import AppLink from 'react-native-app-link';

const Rel = () => {
    return (
        
        <View style={{backgroundColor: '#AED6F1',flex: 1}}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>{"\n"}Related </Text>
            <Button 
                title="MorChana"
                onPress={() => 
                    AppLink.openInStore({appName: "MorChana", appStoreId: "1505185420", appStoreLocale: "th", playStoreId: "com.thaialert.app" }).then(() => {
                        // do stuff
                      })
                      .catch((err) => {
                        // handle error
                      })}
            />
            <Button 
                title="DDC-Care"
                onPress={() => 
                    AppLink.openInStore({appName: "DDC-Care", appStoreId: "", appStoreLocale: "th", playStoreId: "th.or.nectec.ddc_care" }).then(() => {
                        // do stuff
                      })
                      .catch((err) => {
                        // handle error
                      })}
            />
            <Button 
                title="Clicknic"
                onPress={() => 
                    AppLink.openInStore({appName: "Clicknic", appStoreId: "1348575147", appStoreLocale: "th", playStoreId: "co.clicknic.clicknicandroid" }).then(() => {
                        // do stuff
                      })
                      .catch((err) => {
                        // handle error
                      })}
            />
            <Button 
                title="Traffy Fondue"
                onPress={() => 
                    AppLink.openInStore({appName: "Traffy Fondue", appStoreId: "1431630978", appStoreLocale: "th", playStoreId: "com.traffy2.traffy_report" }).then(() => {
                        // do stuff
                      })
                      .catch((err) => {
                        // handle error
                      })}
            />
            <Button 
                title="สมุดสุขภาพประชาชน(H4U by MOPH)"
                onPress={() => 
                    AppLink.openInStore({appName: "สมุดสุขภาพประชาชน(H4U by MOPH)", appStoreId: "1407130411", appStoreLocale: "th", playStoreId: "th.go.moph.ict.smartPhr" }).then(() => {
                        // do stuff
                      })
                      .catch((err) => {
                        // handle error
                      })}
            />
        </View>   
        
    )
}

export default Rel;