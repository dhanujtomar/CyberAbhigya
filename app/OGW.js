import React, { PureComponent } from 'react'
import { StyleSheet, SafeAreaView, ScrollView, TouchableHighlight, Text, Image, View } from 'react-native'
import { useRoute,useNavigation } from '@react-navigation/native'
import Header from './Header';

export default function OGW() {
    const navigation = useNavigation();
    const route = useRoute();
    return (
      <SafeAreaView>
        <Header fdid={8} lanID={route.params.lanID}/>
        <ScrollView style={{}}>
            <View style={{alignItems:'center',}}>
                <TouchableHighlight style={styles.clBtn}>
                    <View flexDirection='row' style={{alignItems:'center'}}>
                        <Image source={require('../assets/MyAssets/Aadhar.png')} style={{height:40,width:56,marginHorizontal:20}}/>
                        <Text style={styles.clBtnTxt}>{route.params.lanID == 1 ? "आधार\n" :'Aadhar\n'}<Text style={{fontWeight:'300',fontSize:12}}>https://uidai.gov.in/</Text></Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.clBtn}>
                    <View flexDirection='row' style={{alignItems:'center'}}>
                        <Image source={require('../assets/MyAssets/wwwNC.png')} style={{height:40,width:40,marginHorizontal:28}}/>
                        <Text style={styles.clBtnTxt}>{route.params.lanID == 1 ? "पैन कार्ड\n" :'Pan card\n'}<Text style={{fontWeight:'300',fontSize:12}}>https://www.onlineservices.nsdl.com/</Text></Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.clBtn}>
                    <View flexDirection='row' style={{alignItems:'center'}}>
                        <Image source={require('../assets/MyAssets/Aadhar.png')} style={{height:40,width:56,marginHorizontal:20}}/>
                        <Text style={styles.clBtnTxt}>{route.params.lanID == 1 ? "पासपोर्ट\n" :'Passport\n'}<Text style={{fontWeight:'300',fontSize:12}}>https://passportindia.gov.in/</Text></Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.clBtn}>
                    <View flexDirection='row' style={{alignItems:'center'}}>
                        <Image source={require('../assets/MyAssets/Cowin.png')} style={{height:40,width:42,marginHorizontal:27}}/>
                        <Text style={styles.clBtnTxt}>{route.params.lanID == 1 ? "कोविड-19\n" :'Cowin (covid)\n'}<Text style={{fontWeight:'300',fontSize:12}}>https://www.cowin.gov.in/</Text></Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.clBtn}>
                    <View flexDirection='row' style={{alignItems:'center'}}>
                        <Image source={require('../assets/MyAssets/Voter.png')} style={{height:41,width:28,marginHorizontal:34}}/>
                        <Text style={styles.clBtnTxt}>{route.params.lanID == 1 ? "मतदाता पहचान\n" :'Voter id:\n'}<Text style={{fontWeight:'300',fontSize:12}}>https://www.nvsp.in/</Text></Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.clBtn}>
                    <View flexDirection='row' style={{alignItems:'center'}}>
                        <Image source={require('../assets/MyAssets/Vehicle.png')} style={{height:40,width:50,marginHorizontal:23}}/>
                        <Text style={styles.clBtnTxt}>{route.params.lanID == 1 ? "वाहन संबंधी साइट\n" :'Vehicle Related\n'}<Text style={{fontWeight:'300',fontSize:12}}>https://parivahan.gov.in/parivahan/</Text></Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.clBtn}>
                    <View flexDirection='row' style={{alignItems:'center'}}>
                        <Image source={require('../assets/MyAssets/RC.png')} style={{height:23,width:50,marginHorizontal:23}}/>
                        <Text style={styles.clBtnTxt}>{route.params.lanID == 1 ? "वाहन आरसी\n" :'RC of vehicle\n'}<Text style={{fontWeight:'300',fontSize:12}}>https://vahan.parivahan.gov.in/</Text></Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.clBtn}>
                    <View flexDirection='row' style={{alignItems:'center'}}>
                        <Image source={require('../assets/MyAssets/Pension.png')} style={{height:42,width:34,marginHorizontal:31}}/>
                        <Text style={styles.clBtnTxt}>{route.params.lanID == 1 ? "पेंशन\n" :'Pension\n'}<Text style={{fontWeight:'300',fontSize:12}}>https://pensionersportal.gov.in/</Text></Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.clBtn}>
                    <View flexDirection='row' style={{alignItems:'center'}}>
                        <Image source={require('../assets/MyAssets/Tax.png')} style={{height:40,width:30,marginHorizontal:33}}/>
                        <Text style={styles.clBtnTxt}>{route.params.lanID == 1 ? "आयकर विभाग\n" :'Income tax department\n'}<Text style={{fontWeight:'300',fontSize:12}}>https://www.incometaxindia.gov.in/</Text></Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.clBtn}>
                    <View flexDirection='row' style={{alignItems:'center'}}>
                        <Image source={require('../assets/MyAssets/Aadhar.png')} style={{height:40,width:56,marginHorizontal:20}}/>
                        <Text style={styles.clBtnTxt}>{route.params.lanID == 1 ? "भारतीय सरकारी योजनाएं\n" :'All Indian government\nschemes\n'}<Text style={{fontWeight:'300',fontSize:12}}>https://services.india.gov.in/</Text></Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.clBtn}>
                    <View flexDirection='row' style={{alignItems:'center'}}>
                        <Image source={require('../assets/MyAssets/Cuffs.png')} style={{height:40,width:42,marginHorizontal:25}}/>
                        <Text style={styles.clBtnTxt}>{route.params.lanID == 1 ? "साइबर अपराध रिपोर्टिंग पोर्टल\n" :'Cyber crime reporting portal\n'}<Text style={{fontWeight:'300',fontSize:12}}>https://cybercrime.gov.in/</Text></Text>
                    </View>
                </TouchableHighlight>
            </View>
        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        background: null,
        alignItems: 'center',
    },
    clBtn: {
        backgroundColor: '#004AAD',
        height:75,
        width: 320,
        justifyContent: 'center',
        borderRadius: 50,
        margin:10,
    },
    clBtnTxt: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
    }
});