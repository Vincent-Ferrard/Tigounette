/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';

class Tig extends Component {
    render() {
        return (
            <View style={styles.container}>
              <View>
                  <Text style={styles.Tig}>Présentez la carte étudiant</Text>
                  <Button style={styles.bvalider} title="Valider"/>
                  <Button style={styles.bnon} title="Non"/>
              </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#66c2ff',
    },
    Tig: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
    },
    bvalider: {
        textAlign: 'center',
        fontSize: 20,
        margin: '10',
        borderStyle: 'solid',
        color: '#ff0000'
    },
    bnon: {
        textAlign: 'center',
        fontSize: 20,
        margin: '10',
        borderStyle: 'solid',
        color: '#ff0000'
    },
  });

  export default Tig