import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Image,
} from 'react-native';
import axios from 'axios';
import {API_TRANSACTION} from 'react-native-dotenv';

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: '',
    };
  }

  componentWillMount(){
    this.setState({table: ''})
  }

  onPress() {
    const {table} = this.state;
    console.log(this.props);
    var self = this;
    axios
      .post('http://192.168.0.16:3000/api/v1/transaction', {
        tableNumber: table,
      })
      .then(function(response) {
        // const {navigation} = this.props
        // this.navigate()
        const selectedTable = response.data.data.tableNumber;
        const id = response.data.data.id;
        self.props.navigation.navigate('menuList', {
          id: id,
          table: selectedTable,
        });
        // console.log(self.props.navigation)
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <Text style={styles.brandText}>Kedai Sans</Text>
          <View style={styles.tableContainer}>
            <Text style={styles.labelInput}>Masukan Nomor Meja</Text>
            <TextInput
              onChangeText={table => this.setState({table: table})}
              style={styles.input}
              keyboardType={'numeric'}
              value={this.state.table}
            />
            <TouchableOpacity
              style={styles.buttonSubmit}
              onPress={() => this.onPress()}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
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
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  tableContainer: {
    padding: 15,
  },
  labelInput: {
    marginBottom: 15,
    fontFamily: 'Nunito Sans',
    color: '#ffffff',
    textAlign: 'center',
  },
  input: {
    height: 40,
    width: 250,
    backgroundColor: '#9E9E9E',
    borderRadius: 5,
    padding: 10,
    color: '#ffffff',
    marginBottom: 20,
  },
  buttonSubmit: {
    paddingVertical: 10,
    backgroundColor: '#d35400',
    borderRadius: 6,
    marginBottom: 10,
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
