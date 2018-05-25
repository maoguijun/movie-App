import React, { Component } from 'react';
import {  SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovie, movieListAction, goToMovieDetail } from '../../actions/movie';
import { easyfetch } from '../../../utils/fetchHelper';
import { host } from '../../../config';
import { createAction } from 'redux-actions';
import { movieType, navMore } from '../../configs/actionTypes';
import { MovieItem } from './components/MovieItem';
import { ImageModal } from '../../components/ImageModal';
import { saveSearchTextInput } from '../../actions/navMoreAction';

class MovieList extends Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log(navigation)
    const { params } = navigation.state;
    console.log(params)
    if (params) {
      return {
        tabBarVisible: params.tabBarVisible
      }
    }
  };
  constructor(props) {
    super(props)
    this.state = {
      movielist:[],
      imgUrl:'',
      modalVisible:false,
      page:0,
      tabBarVisible:true,
      contentOffsetY:0
    }
  }

  componentDidMount = () => {
    const { movieListAction } = this.props
    let { page } = this.state
    fetchMovie({limit:30,offset:0},movieListAction)
    this.setState({
      page: ++page,
    })
  }
  // shouldComponentUpdate = (nextProps, nextState) => {
  //   console.log()
  //   if (nextState.contentOffsetY !== this.setState.contentOffsetY) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }
  // 渲染每个数据
  renderItem = ({item}) => {
    return <MovieItem data={item} onPress={this.itemDetail} open={this.openModal}/>
  }
  // 查看详情
  itemDetail = id => {
    const {goToMovieDetail} = this.props
    console.log(id)
    goToMovieDetail(id)
    this.props.navigation.navigate('MovieDetail')
  }
  // 上拉加载
  fetchMore = () => {
    console.log('aa')
    const { movieListAction, searchText } = this.props
    let { page } = this.state
    console.log(page)
    fetchMovie({limit:30 * page,offset:0,fanhao:searchText},movieListAction)
    this.setState({
      page:++page
    })
  }
  // 打开modal
  openModal = url => {
    console.log(`打开${url}`)
    this.setState({
      modalVisible:true,
      imgUrl:url
    })
  }
  // 关闭modal
  closeModal = () => {
    this.setState({
      modalVisible:false,
      imgUrl:''
    })
  }
  render() {
    const {movielist, movieListAction, saveSearchTextInput } = this.props
    const { imgUrl, modalVisible } = this.state
    // this.navigationOptions.tabBarVisible = this.state.tabBarVisible
    return (
      <View style={{height: '100%'}}>
        <FlatList
          data={movielist}
          onScroll = {e => {
            const {contentOffsetY} = this.state
            if (Math.abs(e.nativeEvent.contentOffset.y - contentOffsetY)<5) {
              // 滑动小于10不响应, 避免过度响应
              return 
            }
            if (contentOffsetY-e.nativeEvent.contentOffset.y < 0) {
              console.log('上滑')
              this.props.navigation.setParams({tabBarVisible:false})
            } else {
              console.log('下滑')
              this.props.navigation.setParams({tabBarVisible:true})
            }
            this.setState({
              contentOffsetY:e.nativeEvent.contentOffset.y
            })
          }}
          renderItem={this.renderItem}
          onEndReachedThreshold={0.3}
          onEndReached={this.fetchMore}
        />
      <ImageModal url={imgUrl} visible={modalVisible} close={this.closeModal}/>
      </View>
    );
  }
};

const mapStateToProps = state => ({
  movielist:state.movie.movielist,
  count:state.movie.count,
  searchText:state.navMore.searchText
});


const mapDispatchToProps = {
  movieListAction,
  goToMovieDetail,
  saveSearchTextInput
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
  
