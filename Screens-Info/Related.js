import React, { Component } from 'react'
import { ImageBackground,StyleSheet,Linking, View, Pressable, Text,} from 'react-native'
import AppLink from 'react-native-app-link';

const Rel = () => {
    return (
        
        <View style={{flex: 1}}>
           <ImageBackground source={require('./0related.png')} resizeMode="cover" style={styles.image}>
              <View style={styles.btcontainer}>
                <Pressable style={styles.button} 
                    onPress={() => 
                        AppLink.openInStore({appName: "MorChana", appStoreId: "1505185420", appStoreLocale: "th", playStoreId: "com.thaialert.app" }).then(() => {
                            // do stuff
                          })
                          .catch((err) => {
                            // handle error
                          })}>
                    <Text style={styles.text}>MorChana</Text>
                </Pressable>

                <Pressable style={styles.button}  
                    onPress={() => 
                        AppLink.openInStore({appName: "DDC-Care", appStoreId: "", appStoreLocale: "th", playStoreId: "th.or.nectec.ddc_care" }).then(() => {
                            // do stuff
                          })
                          .catch((err) => {
                            // handle error
                          })}
                >
                  <Text style={styles.text}>DDC-Care</Text>
                </Pressable>

                <Pressable style={styles.button}
                    onPress={() => 
                        AppLink.openInStore({appName: "Clicknic", appStoreId: "1348575147", appStoreLocale: "th", playStoreId: "co.clicknic.clicknicandroid" }).then(() => {
                            // do stuff
                          })
                          .catch((err) => {
                            // handle error
                          })}
                >
                <Text style={styles.text}>Clicknic</Text>
                </Pressable>

                <Pressable style={styles.button}
                    onPress={() => 
                        AppLink.openInStore({appName: "Traffy Fondue", appStoreId: "1431630978", appStoreLocale: "th", playStoreId: "com.traffy2.traffy_report" }).then(() => {
                            // do stuff
                          })
                          .catch((err) => {
                            // handle error
                          })}
                >
                <Text style={styles.text}>Traffy Fondue</Text>
                </Pressable>

                <Pressable style={styles.button}
                    onPress={() => 
                        AppLink.openInStore({appName: "สมุดสุขภาพประชาชน(H4U by MOPH)", appStoreId: "1407130411", appStoreLocale: "th", playStoreId: "th.go.moph.ict.smartPhr" }).then(() => {
                            // do stuff
                          })
                          .catch((err) => {
                            // handle error
                          })}
                >
                <Text style={styles.text}>สมุดสุขภาพประชาชน(H4U by MOPH)</Text>
                </Pressable>
              </View>
            </ImageBackground>
        </View>   
        
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  btcontainer: {
    flex: 0.25,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 10,
    marginHorizontal: 100,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#66ccff',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});

export default Rel;