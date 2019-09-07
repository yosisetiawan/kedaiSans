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