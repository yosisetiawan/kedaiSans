import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
  StatusBar,
} from 'react-native';
export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  done() {
    this.props.navigation.navigate('SelectTable');
  }
  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <Text style={styles.textInfo}>
            make payments with this code when at cashier
          </Text>
          <Text style={styles.textCode}>#{this.props.navigation.getParam('table', 0)}</Text>
          <Text style={styles.textThanks}>Thank you for visiting our shop</Text>
          <TouchableOpacity
            style={styles.buttonSubmit}
            onPress={() => this.done()}>
            <Text style={styles.submitText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  boxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  textInfo: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: 'Gloria Hallelujah',
  },
  textCode: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: '600',
    marginVertical: 15,
  },
  textThanks: {
    fontSize: 25,
    color: '#ffffff',
    textAlign: 'center',
  },
  buttonSubmit: {
    paddingVertical: 10,
    backgroundColor: '#d35400',
    borderRadius: 6,
    marginBottom: 10,
    marginVertical: 15,
    width: 250,
  },
  submitText: {
    fontFamily: 'Nunito Sans',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 18,
  },
  brandText: {
    fontFamily: 'Nunito Sans',
    color: '#ffffff',
    fontSize: 60,
  },
});
