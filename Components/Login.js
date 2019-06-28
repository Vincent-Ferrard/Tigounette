import TabNavigator from '../Navigation/Navigation'

import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import app from '../Config/Auth';

const accountID = '39dc0fab-5651-43b3-8805-1510d5f93a88';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogged: false, email: null, password: null };
  }

  componentWillMount() {
    this._onLogout();
  }

  _onLogin = () => {
    app.authenticate({
        strategy: 'local',
        email: this.state.email,
        accountIdentifier: this.state.password
      }).then(() => {
        this.setState({ isLogged: true });
        console.log("Login");
      }).catch(e => {
        console.log('Authentication error', e);
      });
  };

  _onLogout = () => {
    app.logout().then(() => {
      this.setState({ isLogged: false });
      console.log("Logout");
    }).catch(e => {
      console.log("Logout error");
    });
  };

  render() {
    return (
      <View style={styles.container}>
      { !this.state.isLogged ? (
        <View>
          <View>
            <TextInput style={styles.header} placeholder="Email" onChangeText={(email) => this.setState({email})} value={this.state.email}/>
            <TextInput style={styles.header} placeholder="Password" onChangeText={(password) => this.setState({password})} />
          </View>
          <View style={styles.buttons}>
            <Button
              style={styles.button}
              onPress={this._onLogin}
              title='Log In'
            />
          </View>
        </View>
      )
      : (
        <TabNavigator/>
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
    padding:20,
    margin:20
  },
  list: {
    flex: 5,
    margin:20
  }
});