import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';

export default class Splash extends Component {

  componentDidMount(){
    setTimeout(() => {
      this.props.navigation.navigate('SelectTable')
    }, 2000)
  }
  render() {
    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#3498db'/>
          <View style={styles.logoContainer}>
              <Image style={{width: 80, height: 80}} source={require('./../assets/images/store.png')}/>
              <Text style={styles.title}>Kedai Sans</Text>
              <Text style={styles.textDesc}>Sans Pesan Menu Di Kedai</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: '#3498db'
  },
  logoContainer:{
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
  },
  title:{
      color: '#ffffff',
      marginTop: 10,
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center'
  },
  textDesc:{
    color: '#ffffff',
    fontWeight: '200'
  } 
})
