import React, { Component, Fragment } from 'react';
import { View, Text } from 'react-native';
import {Content} from 'native-base'

export default class Drink extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <Fragment>
        <Content>
            <Text>Drink</Text>
        </Content>
     </Fragment>
    );
  }
}
