import React, { PureComponent } from 'react'
import { StyleSheet, ScrollView, View, Text, Image, SafeAreaView } from 'react-native'
import { FlatList } from 'react-native';
import { SMinfo } from './Info';

export class SM extends PureComponent {
  render() {
    const item = SMinfo.map((inf) => {
        return (
            <View key={inf.id}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>{inf.infhed}</Text>
                <Text style={[styles.Textinfo]}>{inf.info}</Text>
                <Image  style={{alignSelf:'center'}} source={inf.inImg} />
            </View>
        );
    });
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {item}
            </ScrollView>
        </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        backgroundColor: '#white',
        paddingHorizontal:15,
    },
    Textinfo:{
        fontSize: 18,
        lineHeight: 23,
    }
})

export default SM