import React, { Component } from 'react';
import {  SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movielist:[],
      imgUrl:'',
      modalVisible:false,
      page:0
    }
  }

  render() {

    return (
      <View>
        <Text>asdfasdf</Text>
      </View>
    );
  }
};

const mapStateToProps = state => ({

});


const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(User);
  
