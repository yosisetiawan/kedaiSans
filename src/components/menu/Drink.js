import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';
import {Content, Card, CardItem } from 'native-base'
import {connect} from 'react-redux';
import {Row, Col} from 'react-native-easy-grid'
import * as actionMenus from './../../redux/actions/menus';
import * as actionOrders from './../../redux/actions/orders';
import {API_GET_IMAGES} from 'react-native-dotenv'

class Drink extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    this.props.getData()
  }

  addOrders = (item) => {
    const orderFind = this.props.orders.data.findIndex(order => {
      return order.menu.id == item.id
    })
    
    // let order = this.props.orders
    // console.log(order.data[orderFind].qty)
    if(orderFind == -1){
      const data = {
        menu: item,
        qty: 1
      }
      this.props.addOrder(data)
    }else{
      let order = this.props.orders
      order.data[orderFind].qty += 1
      this.props.changeQty(order.data)
    }
  }

  componentWillReceiveProps(nextProps){
    const category = this.props.tabLabel

    if(nextProps.menus !== this.props.menus){
      const menus = nextProps.menus.data.filter(menu => menu.category_id.name == category)
      this.setState({menus: menus})
    }
  }

  render() {
    return (                                                                                                                          
     <Fragment>
        <Content style={styles.contentContainer}>
          <FlatList
            data={this.state.menus}
            numColumns={2}
            extraData={this.state}
            renderItem={({item}) => 
            <Row>
              <TouchableOpacity key={item.id} onPress={() => this.addOrders(item)}>
                  <Card style={styles.card}>
                    <Image
                      style={styles.images}
                      source={{uri: `${'https://kedai-sans.herokuapp.com/static/uploads/' + item.images}`}}
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
    orders: state.orders,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(actionMenus.getMenus()),
    addOrder: (value) => dispatch(actionOrders.addOrder(value)),
    getOrders: () => dispatch(actionOrders.getOrders()),
    changeQty: (data) => dispatch(actionOrders.orderQty(data))
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
)(Drink);

