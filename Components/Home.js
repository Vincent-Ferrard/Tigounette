import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

import Login from './Login';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isStart: true };
    this.timer = null
    this.stopTimer = this.stopTimer.bind(this)
  }

  componentWillMount() {
    this.timer = setTimeout(this.stopTimer, 1000);
  }

  stopTimer() {
    this.setState({isStart: false});
    clearTimeout(this.timer);
  }

  render() {
    let loggedIn = this.state.accessToken ? true : false;
    return (
      <View style={styles.container}>
      { this.state.isStart ? (
          <View style={styles.home}>
            <Image source={require('../assets/logo.png')} style={{width:200, height:200}}/>
            <Text>Welcome to La Tigounette</Text>
          </View>
      )
      : (
        <Login/>
      )
      }
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  home: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});