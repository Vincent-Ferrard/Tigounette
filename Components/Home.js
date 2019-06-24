/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isStart: true,
    }
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
    return (
      <View style={styles.container}>
          { this.state.isStart ? (
            <View>
                <Image style={styles.welcome} source={require('../assets/logo.png')} style={{width:200, height:200}}/>
                <Text style={styles.welcome}>Welcome to La Tigounette</Text>
            </View>
            )
            : (
                <Button style={styles.login} title="Login"/>
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
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  login: {
  },
});

  export default Home;