import React, {
	Component
} from 'react';
import {
	View,
	Text,
	TextInput
} from 'react-native';
import {
	StackNavigator,
	TabNavigator,
} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import { connect } from 'react-redux';
import Home from './Home';
import Profile from './Profile';
import Detail from './Detail';
import SubDetail from './SubDetail';
import Movie from './movie/MovieList'
import User from './User'
import MovieDetail from './movie/MovieDetail';
// import { changeNavigator } from '../actions/navigatorAction';
import SearchTextInput from '../components/SearchTextInput';
import { 
	EntypoIcon,
  EvilIconsIcon,
  FeatherIcon,
  FontAwesomeIcon,
  FoundationIcon,
  IoniconsIcon,
  MaterialCommunityIconsIcon,
  MaterialIconsIcon,
  OcticonsIcon,
  SimpleLineIconsIcon,
	ZocialIcon
} from '../../utils/fontConfig'



//安卓端需要加上一個headerRight讓title居中
const navigationOptions = {
	headerStyle: {
		borderBottomWidth: 0,
		elevation: 0,
		backgroundColor:'#e0301e',
		height:40
	},
	headerTitleStyle: {
		color: '#fff',
		flex: 1,
		textAlign: 'center',
		height: 30,
		lineHeight: 30,
	},
	headerTintColor: '#666',
	headerBackTitle: null,
	gesturesEnabled: true,
	swipeEnabled: true,
};

const navigationOptionsWithBack = { ...navigationOptions,
	headerRight: < View />
};

const tabBarOptions = {
	upperCaseLabel: false,
	// scrollEnabled: true,
	// showLabel:false, // 这样就没有字了，只有图标
	showIcon: true, // 这样就有图标
	indicatorStyle: {
		height: 0
	},
	style: {
		backgroundColor: '#e0301e'
	},
	tabStyle: {
		height: 49
	},
	labelStyle: {
		color: '#fff',
		fontSize: 14,
		lineHeight: 15,
		margin:0
	},
}

const Tab = TabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			headerTitle: 'Home',
			tabBarIcon:<FontAwesomeIcon name='home' size={26} color='#fff'/>,
			...navigationOptions
		}
	},
	Movie: {
		screen: Movie,
		navigationOptions: {
			headerTitle: 'Movie',
			tabBarIcon:<MaterialIconsIcon name='movie' size={26} color='#fff'/>,
			headerRight:<SearchTextInput />,
			headerLeft:<View/>,
			...navigationOptions
		}
	},
	User: {
		screen: User,
		navigationOptions: {
			headerTitle: 'User',
			tabBarIcon:<FontAwesomeIcon name='user' size={26} color='#fff'/>,
			...navigationOptions
		}
	},
	Setting: {
		screen: Profile,
		navigationOptions: {
			headerTitle: 'Setting',
			tabBarIcon:<MaterialIconsIcon name='settings' size={26} color='#fff'/>,
			...navigationOptions
		}
	}
}, {
	tabBarPosition: 'bottom',
	lazy: true,
	swipeEnabled:true,
	tabBarOptions,
})


export default  Navigator = StackNavigator({
	Tab: {
		screen: Tab
	},
	Detail: {
		screen: Detail,
		navigationOptions: {
			headerTitle: 'Detail',
			...navigationOptionsWithBack
		}
	},
	SubDetail: {
		screen: SubDetail,
		navigationOptions: {
			headerTitle: 'SubDetail',
			...navigationOptionsWithBack
		}
	},
	MovieDetail: {
		screen: MovieDetail,
		navigationOptions: {
			headerTitle: '电影详情',
			...navigationOptionsWithBack
		}
	},

}, {
	headerMode: 'float', // 切换上面tab
	transitionConfig: () => ({
		screenInterpolator: CardStackStyleInterpolator.forHorizontal
	})
})