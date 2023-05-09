import React, { PureComponent } from 'react'
//import { SafeAreaView, StyleSheet ,View, Text} from 'react-native'
import {
    StyleSheet,
    View,
    Button,
    Image,
    Text,
    TouchableHighlight,
    SafeAreaView,
    ImageBackground,
    Platform,
    Touchable,
    StatusBar,
  } from 'react-native';

import {btnNames} from './Info'



function btnChk(num,lanID){
  if(lanID == 2){
    switch(num){
      case 1:
        return 'Social Media Crimes';
      case 2:
        return 'Website/Online Crimes';
      case 3:
        return 'Email/SMS Crimes';
      case 4:
        return 'Crypto Currency Crimes';
      case 5:
        return 'Cyber Crime against\nWomen & Children';
      case 6:
        return 'Child Sexual Abusive Material (CSAM)';
      case 7:
        return 'NULL';
      case 8:
        return 'Govt. Websites';
      case 9:
        return 'Emergency Services';
      case 10:
        return 'Report a Cyber Crime';
    }
  }else{
    switch(num){
      case 1:
        return 'सोशल मीडिया अपराध';
      case 2:
        return 'ऑनलाइन/वेबसाइट अपराध';
      case 3:
        return 'ईमेल/एस.एम.एस. अपराध';
      case 4:
        return 'क्रिप्टोकरेंसी / यूपीआई अपराध';
      case 5:
        return 'महिलाओं और बच्चों के खिलाफ साइबर अपराध';
      case 6:
        return 'बाल यौन शोषण भौतिक\nरूप से अपराध';
      case 7:
        return 'NULL';
      case 8:
        return 'भारत सरकार की वेबसाइट';
      case 9:
        return 'आपातकालीन\nहेल्पलाइन';
      case 10:
        return 'रिपोर्ट दर्ज करें';
    }
  }
  return 'NULL';
}

function btnImgChk(num){
  switch(num){
    case 1:
      return require('../assets/MyAssets/Social-media.png')
    case 2:
      return require('../assets/MyAssets/www.png')
    case 3:
      return require('../assets/MyAssets/email.png')
    case 4:
      return require('../assets/MyAssets/Bitcoin.png')
    case 5:
      return require('../assets/MyAssets/Child_women.png')
    case 6:
      return require('../assets/MyAssets/CSAM.png')
    case 8:
      return require("../assets/MyAssets/QutabMinar.png")
    case 9:
      return require("../assets/MyAssets/24_7.png")
    case 10:
      return require("../assets/MyAssets/Emergency.png")

  }
  return require('../assets/MyAssets/wwwNC.png');
}

function btnImgSt(num){
  switch(num){
    case 1:
      return ([styles.roundImg,{width:46}])
    case 2:
      return ([styles.roundImg,{width:48}])
    case 3:
      return ([[styles.roundImg,{width:44}]])
    case 4:
      return ([styles.roundImg, {width:48}])
    case 5:
      return ([styles.roundImg, {width:40}])
    case 6:
      return ([styles.roundImg, {width:52}])
    case 8:
      return ([styles.roundImg,{width:44}])
    case 9:
      return ([styles.roundImg,{width:48}])
    case 10:
      return ([styles.roundImg,{width:48}])
  }
  return ([styles.roundImg,{width:44}])
}



//require('../assets/MyAssets/Child_women.png')

export default function Header(props) {
    return (
        <View style={styles.container} flexDirection='row'>
            <Text style={styles.HdrTxt}>{btnChk(props.fdid, props.lanID)}</Text>
            <Image style={btnImgSt(props.fdid)} source={btnImgChk(props.fdid)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: 30,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 0.5,
        borderColor: 'black',
        backgroundColor: 'white',
    },
    HdrTxt: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    roundImg: {
      height: 48,
    },
})