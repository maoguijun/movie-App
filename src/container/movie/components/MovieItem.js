import React from 'react';
import {  SafeAreaView, View, Text, TouchableOpacity, FlatList, StyleSheet,Image } from 'react-native';



export const MovieItem = ({data, onPress, open}) => (
  <TouchableOpacity
    onPress={() => onPress(data.fanhao)}
    // onLongPress={() => open(data.imgUrl)}
    >
    <SafeAreaView style={styles.container}>
      <View style={{flex:3}}>
        <Image
          style={{flex:1}}
          // source={{uri:data.imgUrl}}
        />
      </View>
      <View style={{flex:7, flexDirection:'column'}}>
        <Text style={{flex:1}}>{data && data.title}</Text>
        <Text style={{flex:1}}>{data && data.fanhao}</Text>
        <Text style={{flex:1}}>{data && data.date}</Text>
        {/* <Text style={{flex:1}}>{data && data.detailUrl}</Text> */}
      </View>
    </SafeAreaView>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container:{
    flex:1,flexDirection:'row',
    justifyContent: 'space-evenly',
    backgroundColor:'#f5f5f5',
    borderColor:'#fff',
    borderBottomWidth:3,
    borderStyle:'solid',
    height:100
  }
})