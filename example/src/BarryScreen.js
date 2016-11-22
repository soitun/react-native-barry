import React, { Component } from 'react'
import barry from 'tipsi-barry'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instruction: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    margin: 10,
    borderWidth: 1,
  },
  token: {
    height: 20,
  },
})

export default class BarryScreen extends Component {
  state = {
    loading: false,
    allowed: false,
    token: null,
  }

  handleBarryClick = () => {
    try {
      const token = barry.scanBarcode('Hello', 'World')
    } catch (error) {
      console.log('Error:', error) // eslint-disable-line no-console
      this.setState({
        loading: false,
      })
    }
  }

  render() {
    const { loading, allowed, token } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Barry Example
        </Text>
        <Text style={styles.instruction}>
          Click button to show Barry.
        </Text>
        <Button
          text="Pay with Barry"
          disabledText="Not supported"
          loading={loading}
          disabled={!allowed}
          style={styles.button}
          accessible
          accessibilityLabel={'applePayButton'}
          onPress={this.handleBarryClick}
        />
      </View>
    )
  }
}
