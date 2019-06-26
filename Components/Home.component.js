import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  FlatList
} from 'react-native';
import AzureAuth from 'react-native-azure-auth';
import {AzureInstance, AzureLoginView} from 'react-native-azure-ad-2'

const CLIENT_ID = '5d28b3c1-2d2c-45f2-bebb-ad784847e0b0' // replace the string with YOUR client ID


var credentials = {
  client_id: CLIENT_ID,
  scope: 'User.ReadBasic.All Mail.Read offline_access',
};

export default class Auth0Sample extends Component {
  constructor(props) {
    super(props);
    this.state = { accessToken: null, user: '', userId: '', isStart: true };
    this.timer = null
    this.stopTimer = this.stopTimer.bind(this);
		this.azureInstance = new AzureInstance(credentials);
		this._onLoginSuccess = this._onLoginSuccess.bind(this);
  }

  componentWillMount() {
    this.timer = setTimeout(this.stopTimer, 1000);
    console.log("WELCOME")
  }
  stopTimer() {
    console.log("STOP TIMER")
    this.setState({isStart: false});
    clearTimeout(this.timer);
  }

  // function to be called after login is successful
	_onLoginSuccess(){
		this.azureInstance.getUserInfo().then(result => {
			console.log(result);
		}).catch(err => {
			console.log(err);
		})
	}

  render() {
    let loggedIn = this.state.accessToken  ? true : false;
    return (
      <View style={styles.container}>
        { this.state.isStart ? (
            <View>
                <Image style={styles.welcome} source={require('../assets/logo.png')} style={{width:200, height:200}}/>
                <Text style={styles.welcome}>Welcome to La Tigounette</Text>
            </View>
            )
            : (
              <AzureLoginView
              	azureInstance={this.azureInstance}
              	loadingMessage="Requesting access token"
              	onSuccess={this._onLoginSuccess}
              />
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
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  text: {
    textAlign: 'center'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    padding: 20
  },
  button: {
    flex: 1,
    textAlign: 'center',
    padding:20,
    margin:20
  },
  list: {
    flex: 5,
    margin:20
  }
});

AppRegistry.registerComponent('Auth0Sample', () => Auth0Sample);