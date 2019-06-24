/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

class Start extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isStart: false,
        }
        this.timer = null
        this.stopTimer = this.stopTimer.bind(this)
      }
    
      componentWillMount() {
        this.timer = setTimeout(this.stopTimer, 1000);
      }
      stopTimer() {
        this.setState({isStart: true});
        clearTimeout(this.timer);
      }
    
      render() {
        return (
          <View style={styles.container}>
              { this.state.isStart ? 
                    <Image source={require('../assets/logo.png')} style={{width:200, height:200}}/>
                :
                    <Text style={styles.welcome}>Welcome to La Tigounette</Text>
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
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  
  export default Start;