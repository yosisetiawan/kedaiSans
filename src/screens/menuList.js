import React, {Component, Fragment} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Content, Card, CardItem} from 'native-base';
import {Col, Row} from 'react-native-easy-grid';
import {connect} from 'react-redux';
import * as actionMenus from './../redux/actions/menus';
import {API_GET_IMAGES} from 'react-native-dotenv';

class menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getData();
  }
  render() {
    console.log(this.props.menus.data);
    return (
      <Fragment>
        <Content style={styles.contentContainer}>
          <Row>
            {this.props.menus.data.length !== 0 &&
              this.props.menus.data.map((items, i) => (
                <TouchableOpacity key={items.id}>
                  <Card style={styles.card}>
                    <Image
                      style={styles.images}
                      source={{uri: `${API_GET_IMAGES + items.images}`}}
                    />
                    <CardItem>
                      <Col>
                        <Text style={styles.menuName}>{items.name}</Text>
                        <Text>Rp {items.price}</Text>
                      </Col>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              ))}
          </Row>
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
  header: {
    backgroundColor: '#3498db',
  },
  leftHeader: {
    flex: 1,
    fontWeight: '100',
  },
  titleHeader: {
    flex: 1,
  },
  rightHeader: {
    flex: 1,
  },
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(menu);
