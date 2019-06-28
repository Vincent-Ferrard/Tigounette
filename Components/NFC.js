import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';


class NFC extends Component {
    render() {
        return (
            <View style={styles.container}>
              <View>
                  <Image style={styles.NFC} source={require('../assets/Logo-NFC.png')} style={{width:300, height:300}}/>
                  <Text style={styles.NFC}>Présentez la carte étudiant</Text>
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
    NFC: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
    },
  });

  export default NFC;