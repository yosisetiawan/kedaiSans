import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import {Content, Card, CardItem } from 'native-base'
import {connect} from 'react-redux';
import {Row, Col} from 'react-native-easy-grid'
import * as actionMenus from './../../redux/actions/menus';
import {API_GET_IMAGES} from 'react-native-dotenv'

class AllMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    console.log(this.props.getData())
  }

  render() {
    return (                                                                                                                          
     <Fragment>
        <Content style={styles.contentContainer}>
          <FlatList
            data={this.props.menus.data}
            numColumns={2}
            renderItem={({item}) => 
            <Row>
              <TouchableOpacity key={item.id}>
                  <Card style={styles.card}>
                    <Image
                      style={styles.images}
                      source={{uri: `${API_GET_IMAGES + item.images}`}}
                    />
                    <CardItem>
                      <Col>
                        <Text style={styles.menuName}>{item.name}</Text>
                        <Text>Rp {item.price}</Text>
                      </Col>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
            </Row>
          }
          />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        </Content>
     </Fragment>
    );
  }
}


const mapStateToProps = state => {
  return {
    menus: state.menus,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(actionMenus.getMenus()),
  };
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
  },
  images: {
    height: 80,
    width: 150,
    paddingBottom: 10,
  },
  foodBox: {
    padding: 9,
  },
  menuFood: {
    padding: 5,
  },
  textTitle: {
    fontFamily: 'Nunito Sans',
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
  },
  card: {
    width: 150,
    height: 160,
    marginRight: 25,
  },
  menuName: {
    fontSize: 18,
    fontWeight: '500',
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllMenu);

