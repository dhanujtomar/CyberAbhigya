import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useRoute } from '@react-navigation/native';
import {StyleSheet ,TextInput, SafeAreaView, Image, ImageBackground, View, Text,TouchableHighlight} from 'react-native';


const img = require("../assets/MyAssets/image-bg.png");

export default function HomeScreen() {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={img} style={styles.container}>
                <View style={{flex:1}}>
                    <View>
                        <TextInput style={styles.SearchBarStyle} selectionColor={'black'} placeholder="Search"/>
                    </View>
                </View>
                <View style={{flex:2.4}}>
                    <View style={{flexDirection:'row'}}>
                        <TouchableHighlight onPress={() => navigation.navigate('Fraud',{lanID:route.params.lanID})} style={[styles.gola]} underlayColor='white'>
                            <View style={styles.gola}>
                                <Image style={{width:100,height:82}} source={require("../assets/MyAssets/Book.png")}/>
                                <Text style={{textAlign:'center'}}>{route.params.lanID == 1 ? 'जागरूकता और\nशिक्षा' : 'Awareness and Education'}</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => navigation.navigate('FaR',{lanID:route.params.lanID})} style={[styles.gola]} underlayColor='white'>
                            <View style={styles.gola}>
                                <Image style={{width:90,height:90,}} source={require("../assets/MyAssets/24_7.png")}/>
                                <Text style={{textAlign:'center'}}>{route.params.lanID == 1 ? 'आपातकालीन\nहेल्पलाइन' : 'Emergency\nServices'}</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableHighlight onPress={() => navigation.navigate('OGW',{lanID:route.params.lanID})} style={[styles.gola]} underlayColor='white'>
                            <View style={styles.gola}>
                                <View style={{position:'relative',bottom:5, justifyContent:'center',alignItems:'center'}}>
                                    <Image style={{width:80,height:90}} source={require("../assets/MyAssets/QutabMinar.png")}/>
                                    <Text style={{textAlign:'center'}}>{route.params.lanID == 1 ? 'भारत सरकार की\nवेबसाइट' : 'Govt. Websites'}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => navigation.navigate('ES',{lanID:route.params.lanID})} style={[styles.gola]} underlayColor='white'>
                            <View style={[styles.gola,]}>
                                <View style={{position:'relative',bottom:10, justifyContent:'center',alignItems:'center'}}>
                                <Image style={{width:90,height:90,}} source={require("../assets/MyAssets/Emergency.png")}/>
                                    <Text style={{textAlign:'center'}}>{route.params.lanID == 1 ? 'रिपोर्ट दर्ज करें' : 'Report Crime'}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </ImageBackground>
            <StatusBar style="auto" />
        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Platform.OS === "android" ? 30 : 0,
      width: '100%',
    },
    gola: {
        borderWidth:5,
        width: 150,
        height:150,
        borderRadius:100,
        margin:10,
        justifyContent:"center",alignItems:'center'
    },
    SearchBarStyle: {
        borderWidth:1,
        width:280,
        fontSize:22,
        borderRadius:100,
        padding:9,
        paddingHorizontal:20,
        backgroundColor:'white',
        borderColor: 'rgba(0, 0, 0, 0.15)',
    },
})