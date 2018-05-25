import React from 'react';
import {  SafeAreaView, View, Text, TouchableOpacity, FlatList, StyleSheet,Image, Modal, TouchableHighlight } from 'react-native';



export const ImageModal = props => {
  const { url, close } = props
  return (
    <Modal
      animationType={"fade"}
      transparent={true}
      onRequestClose={() => close()}
      {...props}
      >
      <Image
        style={{flex:1}}
        source={{uri:url}}
      />
    </Modal>
  )
}