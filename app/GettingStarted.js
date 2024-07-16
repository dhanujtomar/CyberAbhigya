import React, { Component } from 'react'
import { StyleSheet ,View, SafeAreaView, Text } from 'react-native'
import Video from 'react-native-video';
import Laptop from '../assets/MyAssets/LaptopGif.mp4';

export class GettingStarted extends Component {
  render() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Getting Started</Text>
            <Video
                source={Laptop}
                resizeMode="cover"
                style={StyleSheet.absoluteFill}
            />
        </SafeAreaView>
    )
  }
}

var styles = StyleSheet.create({
    container: {
        marginTop: 30,
        backgroundColor: '#white',
        paddingHorizontal:15,
        justifyContent: 'center',
        alignItems:'center',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    
})

export default GettingStarted