import React, { Component } from 'react';
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
    Touchable
  } from 'react-native';
import {btnNames} from './Info';


class CrimesScreen extends Component {

    render() {
        const items = btnNames.map((BtnTitle) => {
            return (
                <TouchableHighlight style={{margin:10,}} key={BtnTitle.id}>
                    <View style={[styles.appHolder, {flexDirection:'row'}]}>
                        <View style={styles.roundImgContainer}>
                            <Image style={[styles.roundImg, BtnTitle.BimgMes]} source={BtnTitle.Bimg} />
                        </View>
                        <Text style={{position:'relative', left:10, color: 'black', fontSize:20}}>{BtnTitle.TitleEN}</Text>
                    </View>
                </TouchableHighlight>
            );
        });
        
        return (
            <SafeAreaView style={styles.container}>
                {items}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#fff3db',
    },
    roundImgContainer: {
        width: 90,
        height: 90,
        borderRadius: 100,
        backgroundColor: '#E6C2BF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    roundImg: {
        width: 70,
        height: 70,
    },
    appHolder: {
        width: 300,
        height: 90,
        backgroundColor: 'white',
        borderRadius: 100,
        paddingRight: 100,
        alignItems: 'center',
    },
})

export default CrimesScreen