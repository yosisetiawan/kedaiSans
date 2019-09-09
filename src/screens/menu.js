import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
  FlatList
} from 'react-native';
import {
  Container,
  Header,
  Body,
  Right,
  Left,
  Card,
  CardItem,
  Content,
  Badge,
  Button,
  Footer,
  FooterTab,
} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';


import AllMenu from './../components/menu/AllMenu'
import Drink from './../components/menu/Drink'
import Food from '../components/menu/Food'

import * as actionOrders from './../redux/actions/orders'
import {connect} from 'react-redux'

class menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      date: '',
      qty: '0',
      dumy: [
        {
          'name': 'Ayam Goreng', 
          'price':'15000', 
          'qty':'5',
          'images': 'ayam.jpg'
        },
        {
          'name': 'Bakso Goreng', 
          'price':'15000', 
          'qty':'3',
          'images': 'ayam.jpg'
        },
        {
          'name': 'Sosis Goreng', 
          'price':'15000', 
          'qty':'5',
          'images': 'ayam.jpg'
        },
        {
          'name': 'Kentang Goreng', 
          'price':'15000', 
          'qty':'4',
          'images': 'ayam.jpg'
        },
        {
          'name': 'Ayam Goreng', 
          'price':'15000', 
          'qty':'5',
          'images': 'ayam.jpg'
        },
        {
          'name': 'Bakso Goreng', 
          'price':'15000', 
          'qty':'3',
          'images': 'ayam.jpg'
        },
        {
          'name': 'Sosis Goreng', 
          'price':'15000', 
          'qty':'5',
          'images': 'ayam.jpg'
        },
        {
          'name': 'Kentang Goreng', 
          'price':'15000', 
          'qty':'4',
          'images': 'ayam.jpg'
        },
    ]
    };
  }

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
    console.log(this.setState({isModalVisible: !this.state.isModalVisible}));
  };

  onConfirm() {
    Alert.alert(
      'Confirm Order',
      'are you sure to order this ??',
      [
        {
          text: 'NO',
          onPress: () => console.log('No Pressed'),
          style: 'cancel',
        },
        {text: 'YES', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  removeOrders = (item) =>{
    let orders = this.props.orders
    const orderFind = this.props.orders.data.findIndex(order => {
      return order.menu.id == item.menu.id
    })
    
    // console.log(orders.data[orderFind])
    if(orders.data[orderFind].qty > 1){
      orders.data[orderFind].qty -= 1
      this.props.changeQty(orders.data)
    }else{
      orders.data.splice(orderFind, 1)
      this.props.changeQty(orders.data)
    }
  }

  paymentCode() {
    this.setState({isModalVisible: false})
    this.props.navigation.navigate('payment');
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.orders !== this.props.orders){
      console.log('Data Update')
      this.setState({orders: nextProps.orders.data})
      console.log(this.state.orders)
    }
  }

  render() {
    return (
      <Container>
        <Header style={styles.header} androidStatusBarColor="#2980b9">
          <Left style={styles.leftHeader}>
            <Text style={{color: '#FFFFFF'}}>
              #{this.props.navigation.getParam('table', 0)}
            </Text>
          </Left>
          <Body style={styles.titleHeader}>
            <Text style={styles.textTitle}>Kedai Sans</Text>
          </Body>
          <Right style={styles.rightHeader}>
            <Text style={{color: '#FFFFFF'}}>00:00</Text>
          </Right>
        </Header>
        <ScrollableTabView
          tabBarBackgroundColor="#3498db"
          tabBarActiveTextColor="#ffffff"
          tabBarInactiveTextColor="#ffffff"
          tabBarUnderlineStyle={{backgroundColor: 'transparent'}}
          tabBarTextStyle={{fontSize: 10}}>
          <AllMenu tabLabel="All Menu"/>
          <Food tabLabel="Food"/>
          <Drink tabLabel="Drink"/>
        </ScrollableTabView>
        <View style={styles.boxNavigation}>
          <Row>
            <View style={styles.boxCart}>
              <FlatList
                data={this.state.orders}
                horizontal={true}
                extraData={this.state}
                renderItem={({item, i}) =>
                <Col>
                  <TouchableOpacity key={item.menu.id} onPress={() => this.removeOrders(item)}>
                      <Card style={{backgroundColor: '#7f8c8d'}}> 
                        <Image style={styles.cartImage} source={{uri: `${'http://192.168.0.8:3000/static/uploads/' + item.menu.images}`}}/>
                        <Text style={{textAlign: 'center', color: '#ffffff'}}>{item.qty}</Text>
                      </Card>
                  </TouchableOpacity>
                </Col>
              }
              />
            </View>
            <View style={styles.boxButton}>
              <Col>
                  <TouchableOpacity style={styles.buttonConfirm} onPress={() => this.onConfirm()}>
                    <Text style={styles.textButton}>Confirm</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonCall} onPress={() => alert('Our waiter will come to your table')}>
                    <Text style={styles.textButton}>Call</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonBill} onPress={() => this.toggleModal()}>
                    <Text style={styles.textButton}>Bill</Text>
                  </TouchableOpacity>
              </Col>
              {/* Modal Screen */}
                  <Modal isVisible={this.state.isModalVisible}>
                  <Container style={{borderRadius: 5}}>
                    <Header style={styles.headerModal}>
                      <Left style={styles.leftHeader} />
                      <Body style={styles.titleHeader}>
                        <Text style={styles.textTitle}>Bill</Text>
                      </Body>
                      <Right style={styles.rightHeader} />
                    </Header>
                    <Content style={styles.modalContent}>
                      <View>
                        <Row style={styles.rowBill}>
                          <Text style={styles.billTextLeft}>Status</Text>
                          <Text style={styles.billTextCenter}>Item</Text>
                          <Text style={styles.billTextRight}>Price</Text>
                        </Row>
                        <Row style={styles.rowBillList}>
                          <Text style={styles.billTextLeftItem}>Waitting</Text>
                          <Text style={styles.billTextCenterItem}>
                            Ayam Goreng
                          </Text>
                          <Text style={styles.billTextRightItem}>15000</Text>
                        </Row>
                      </View>
                      <View style={styles.billPaymentBox}>
                        <Row style={{marginBottom: 8}}>
                          <Text style={{textAlign: 'left', flex: 1}}>
                            Subtotal
                          </Text>
                          <Text style={{textAlign: 'right', flex: 1}}>15000</Text>
                        </Row>
                        <Row style={{marginBottom: 8}}>
                          <Text style={{textAlign: 'left', flex: 1}}>
                            Discount
                          </Text>
                          <Text style={{textAlign: 'right', flex: 1}}>15000</Text>
                        </Row>
                        <Row style={{marginBottom: 8}}>
                          <Text style={{textAlign: 'left', flex: 1}}>
                            Service Charge
                          </Text>
                          <Text style={{textAlign: 'right', flex: 1}}>15000</Text>
                        </Row>
                        <Row style={{marginBottom: 8}}>
                          <Text style={{textAlign: 'left', flex: 1}}>Tax</Text>
                          <Text style={{textAlign: 'right', flex: 1}}>15000</Text>
                        </Row>
                        <Row style={{marginBottom: 8}}>
                          <Text style={{textAlign: 'left', flex: 1}}>Total</Text>
                          <Text style={{textAlign: 'right', flex: 1}}>15000</Text>
                        </Row>
                      </View>
                    </Content>
                    <Footer>
                      <FooterTab>
                        <Button
                          vertical
                          style={styles.buttonPay}
                          onPress={() => this.paymentCode()}>
                          <Icon name="payment" size={30} color="#ffffff" />
                          <Text style={styles.footerButtonText}>
                            Pay at the cashier
                          </Text>
                        </Button>
                        <Button
                          vertical
                          style={styles.buttonClose}
                          onPress={() => this.toggleModal()}>
                          <Icon name="close" size={30} color="#ffffff" />
                          <Text style={styles.footerButtonText}>Close</Text>
                        </Button>
                      </FooterTab>
                    </Footer>
                  </Container>
                  </Modal>
                  {/* Modal Screen End */}
            </View>
          </Row>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrders: () => dispatch(actionOrders.GET_ORDERS()),
    changeQty: (data) => dispatch(actionOrders.orderQty(data)) 
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3498db',
  },
  headerModal: {
    backgroundColor: '#3498db',
  },
  leftHeader: {
    flex: 1,
  },
  titleHeader: {
    flex: 1,
  },
  rightHeader: {
    flex: 1,
  },
  images: {
    borderRadius: 5,
    height: 80,
    width: 108,
    paddingBottom: 10,
  },
  foodBox: {
    padding: 5,
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
  boxNavigation: {
    height: 120,
    backgroundColor: '#3498db',
    padding: 4,
  },
  boxCart: {
    height: 110,
    width: 225,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginHorizontal: 5,
    padding: 7,
  },
  buttonConfirm: {
    backgroundColor: '#95a5a6',
    height: 25,
    width: 99,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  buttonCall: {
    backgroundColor: '#2ecc71',
    height: 25,
    width: 99,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  buttonBill: {
    backgroundColor: '#e67e22',
    height: 25,
    width: 99,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  textButton: {
    fontFamily: 'Nunito Sans',
    color: '#ffffff',
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  boxButton: {
    padding: 10
  },
  cartItems: {
    width: 65,
    height: 60,
  },
  cartImage:{
    width: 80,
    height: 65
  },
  modal: {
    width: 320,
    height: 450,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  modalHeader: {
    backgroundColor: 'blue',
  },
  headerText: {
    fontSize: 25,
    fontWeight: '400',
    color: '#ffffff',
    alignContent: 'center',
    textAlign: 'center',
  },
  closeText: {
    fontSize: 15,
    color: '#ffffff',
  },
  modalContent: {
    padding: 0,
  },
  rowBill: {
    backgroundColor: '#ffffff',
    padding: 10,
  },
  billTextLeft: {
    textAlign: 'left',
    flex: 1,
    color: '#000000',
  },
  billTextCenter: {
    textAlign: 'center',
    flex: 1,
    color: '#000000',
  },
  billTextRight: {
    textAlign: 'right',
    flex: 1,
    color: '#000000',
  },
  rowBillList: {
    backgroundColor: '#95a5a6',
    padding: 10,
  },
  billTextLeftItem: {
    textAlign: 'left',
    flex: 1,
    color: '#ffffff',
  },
  billTextCenterItem: {
    textAlign: 'center',
    flex: 1,
    color: '#ffffff',
  },
  billTextRightItem: {
    textAlign: 'right',
    flex: 1,
    color: '#ffffff',
  },
  billPaymentBox: {
    backgroundColor: '#7f8c8d',
    padding: 10,
  },
  buttonPay: {
    backgroundColor: '#27ae60',
  },
  buttonClose: {
    backgroundColor: '#c0392b',
  },
  footerButtonText: {
    color: '#ffffff',
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(menu)
