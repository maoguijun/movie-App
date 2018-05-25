import React, { Component } from 'react';
import {  SafeAreaView, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveSearchTextInput, changeFouce } from '../actions/navMoreAction';
import { combineActions } from 'redux-actions';
import { fetchMovie, movieListAction } from '../actions/movie';

class SearchTextInput extends Component{
  render = () => {
    const {saveSearchTextInput, isSearch, changeFouce, movieListAction} = this.props
    return (
      <View>
        {isSearch ? <TextInput
        style={styles.container}
        editable = {true}
        placeholder='搜索番号'
        underlineColorAndroid='#fff'
        selectionColor='#fff'
        placeholderTextColor='#fff'
        // onBlur={e => changeFouce()}
        onSubmitEditing = {e => {
          console.log(e.nativeEvent.text)
          saveSearchTextInput({searchText:e.nativeEvent.text})
          changeFouce()
          fetchMovie({fanhao:e.nativeEvent.text,limit:30,offset:0},movieListAction)
        }}
      /> : <Text onPress={() => changeFouce()} style={styles.text}>点我搜索</Text>}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  isSearch: state.navMore.isSearch
});

const mapDispatchToProps = {
  saveSearchTextInput,
  changeFouce,
  fetchMovie,
  movieListAction
};

const styles = StyleSheet.create({
  container: {
    width:100,
    color:'#fff'
  },
  text: {
    color:'#fff'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchTextInput);