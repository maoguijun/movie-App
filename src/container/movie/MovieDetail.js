import React, { Component } from 'react';
import { Text, TouchableOpacity, SafeAreaView, View } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

class MovieDetail extends Component {
  state = {
    fanhao:''
  }
  render() {
    const { fanhao } = this.props
    return (
      <SafeAreaView style={ {flex: 1} }>
        <Text>{'fanhao:'}{fanhao}</Text>
        <Icon name ='home' size= {30}/>
        <TouchableOpacity onPress={ ()=>this.props.navigation.goBack() }>
            <Text>Go Back2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ ()=>this.props.navigation.goBack('Tab') }>
            <Text>Go Tab</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
};

const mapStateToProps = state => ({
  fanhao:state.movie.movieId,
  count:state.movie.count
});


const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);