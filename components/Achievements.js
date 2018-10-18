import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Image,
} from 'react-native';

export default class Achievements extends Component {
	constructor(props){
		super(props);
		this.state = {
			daily: 20,
		};
	}
	render() {
		const five = '../assets/images/achievements/5.png';
		const five_ = '../assets/images/achievements/5_.png';
		
		return (
				<View style={styles.container}>

					<Text style={styles.header}>Daily Completed</Text>
					<Text style={styles.totaltext}>Best: {this.state.daily} completed todos in day</Text>

					<View style={styles.badgeContainer}>
						<Image
							style={styles.achievementBadge}
							source={
								this.state.daily >= 5
				          ? require('../assets/images/achievements/5.png')
				          : require('../assets/images/achievements/5_.png')
							}
						/>
						<Image
							style={styles.achievementBadge}
							source={
								this.state.daily >= 10
				          ? require('../assets/images/achievements/10.png')
				          : require('../assets/images/achievements/10_.png')
							}
						/>
						<Image
							style={styles.achievementBadge}
							source={
								this.state.daily >= 20
				          ? require('../assets/images/achievements/20.png')
				          : require('../assets/images/achievements/20_.png')
							}
						/>
						<Image
							style={styles.achievementBadge}
							source={
								this.state.daily >= 30
				          ? require('../assets/images/achievements/30.png')
				          : require('../assets/images/achievements/30_.png')
							}
						/>
						<Image
							style={styles.achievementBadge}
							source={
								this.state.daily >= 40
				          ? require('../assets/images/achievements/40.png')
				          : require('../assets/images/achievements/40_.png')
							}
						/>
						<Image
							style={styles.achievementBadge}
							source={
								this.state.daily >= 50
				          ? require('../assets/images/achievements/50.png')
				          : require('../assets/images/achievements/50_.png')
							}
						/>
					</View>
				</View>
		);
	}

}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 15,
		paddingLeft: 15,
		paddingRight: 15,
	},
	header: {
		fontSize: 25,
	},
	totaltext: {
		fontSize: 10,
		marginTop:10,
		textAlign: 'right',
	},
	achievementBadge: {
		margin:20,
		width:50,
		height:50,
	},
	badgeContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	}
});
