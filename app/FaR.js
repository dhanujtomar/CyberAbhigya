import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Image } from 'react-native'
import { TouchableHighlight, View, Text } from 'react-native'
import Header from './Header'
import call from 'react-native-phone-call';
import { useRoute } from '@react-navigation/native'

const FaR = () =>{
    const route = useRoute();
    const triggerCall1 = (num) => {
        const args = {
          number: '112',
          prompt: true,
        };
        
        // Make a call
        call(args).catch(console.error);
    };
    const triggerCall2 = (num) => {
        const args = {
          number: '1091',
          prompt: true,
        };
        
        // Make a call
        call(args).catch(console.error);
    };
    const triggerCall3 = (num) => {
        const args = {
          number: '1098',
          prompt: true,
        };
        
        // Make a call
        call(args).catch(console.error);
    };
    const triggerCall4 = (num) => {
        const args = {
          number: '1930',
          prompt: true,
        };
        
        // Make a call
        call(args).catch(console.error);
    };

    return (
      <SafeAreaView>
        <Header fdid={9} lanID={route.params.lanID}/>
        <View style={styles.container}>
            <Text style={{fontSize:28,color:'#FF0000', fontWeight:'bold'}}>{route.params.lanID == 1 ? "आपातकालीन हेल्पलाइन" :"Emergency Helpline"}</Text>
            <Text style={{fontSize:150,margin:-35,marginBottom:-25,fontWeight:'bold',color:'#3C52AC'}}>112</Text>
            <TouchableHighlight style={styles.clBtn} onPress={triggerCall1}>
                <Text style={styles.clBtnTxt}>{route.params.lanID == 1 ? "फ़ोन":"Call"}</Text>
            </TouchableHighlight>
            <View style={{flexDirection:'row',alignItems:'center',marginVertical:10,marginTop:30,}}>
                <Text style={{fontSize:20,color:'#FF0000',fontWeight:'bold',width:200,}}>{route.params.lanID == 1 ? "महिला हेल्पलाइन":"Women Helpline"}</Text>
                <TouchableHighlight style={styles.clBtn} onPress={triggerCall2}>
                    <Text style={styles.clBtnTxt}>1091</Text>
                </TouchableHighlight>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginVertical:10,}}>
                <Text style={{fontSize:20,color:'#FF0000',fontWeight:'bold',width:200,}}>{route.params.lanID == 1 ? "चाइल्ड हेल्पलाइन":"Child Helpline"}</Text>
                <TouchableHighlight style={styles.clBtn} onPress={triggerCall3}>
                    <Text style={styles.clBtnTxt}>1098</Text>
                </TouchableHighlight>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginVertical:10,}}>
                <Text style={{fontSize:20,color:'#FF0000',fontWeight:'bold',width:200,}}>{ route.params.lanID ==1 ?"साइबर अपराध रिपोर्ट करें":"Report Cyber Crime"}</Text>
                <TouchableHighlight style={styles.clBtn} onPress={triggerCall4}>
                    <Text style={styles.clBtnTxt}>1930</Text>
                </TouchableHighlight>
            </View>
            <TouchableHighlight style={[styles.clBtn,{width:300, backgroundColor:'#3C52AC',height:72,marginTop:30} ]}>
                <View flexDirection='row' style={{alignItems:'center',}}>
                    <Image source={require('../assets/MyAssets/wwwNC.png')} style={{height:45,width:45,marginHorizontal:5}}/>
                    <Text style={[styles.clBtnTxt,{fontSize:24,}]}>cybercrime.gov.in</Text>
                </View>
            </TouchableHighlight>
        </View>
      </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        background: null,
        alignItems: 'center',
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
});

export default FaR