import React, { PureComponent } from 'react'
import { SafeAreaView, Text, StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import Header from './Header';
import call from 'react-native-phone-call';
import { useRoute } from '@react-navigation/native';

const ES = () => {
    const route = useRoute()
    const triggerCall = () => {
        const args = {
          number: '1930',
          prompt: true,
        }
        // Make a call
        call(args).catch(console.error);
    }

    return (
        <SafeAreaView>
            <Header fdid={10} lanID={route.params.lanID} />
            <View style={[styles.container, {marginBottom:50}]}>
                <Text style={{color:"#FF0000",fontWeight:'bold',fontSize:36,textAlign:'center'}}>{route.params.lanID == 1 ? "यह सेवा विकास में है":"This service under development"}</Text>
                <Text style={{color:"#004AAD",fontWeight:'bold',fontSize:24,marginBottom:100}}>{route.params.lanID == 1 ? "सेवा जल्दी ही शुरू की जाएगी":"We'll start this service soon"}</Text>
                <Text style={{color:"#004AAD",fontWeight:'bold',fontSize:40}}>{route.params.lanID == 1 ? "इस दौरान":"Meanwhile"}</Text>
            </View>
            <Text style={{color:"#004AAD",fontWeight:'bold',fontSize:24,marginLeft:40}}>{route.params.lanID == 1 ? "संपर्क":"Contact"}</Text>
            <View style={{alignItems:'center'}}>
                <TouchableHighlight style={[styles.clBtn,{width:300, backgroundColor:'#3C52AC',height:72,marginTop:30} ]}>
                    <View flexDirection='row' style={{alignItems:'center',}}>
                        <Image source={require('../assets/MyAssets/wwwNC.png')} style={{height:45,width:45,marginHorizontal:5}}/>
                        <Text style={[styles.clBtnTxt,{fontSize:24,}]}>{route.params.lanID == 1 ? "ऑनलाइन रिपोर्ट":"Report Online"}</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.clBtn,{width:300, backgroundColor:'#3C52AC',height:72,marginTop:30} ]} onPress={triggerCall}>
                    <View flexDirection='row' style={{alignItems:'center',}}>
                        <Image source={require('../assets/MyAssets/Phone.png')} style={{height:42,width:42,marginHorizontal:5}}/>
                        <Text style={[styles.clBtnTxt,{fontSize:24,}]}>{route.params.lanID == 1 ? "साइबर क्राइम हेल्पलाइन":"Cybercrime Helpline"}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 30,
    },
    clBtn: {
        backgroundColor: '#FF0000',
        height: 55,
        width: 100,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    clBtnTxt: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
    }
})

export default ES;