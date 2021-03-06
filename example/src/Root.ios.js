import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { TabViewAnimated, TabBarTop } from 'react-native-tab-view'
import BarryScreen from './BarryScreen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  statusbar: {
    height: 20,
  },
  tabsContainer: {
    flex: 1,
  },
  tabbar: {
    height: 48,
    backgroundColor: '#fff',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    backgroundColor: '#000',
  },
  label: {
    color: '#000',
    fontSize: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
})

export default class Root extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Pay' },
      { key: '2', title: 'Card Form' },
      { key: '3', title: 'Custom Card' },
      { key: '4', title: 'Card Text Field' },
    ],
  };

  handleChangeTab = (index) => {
    this.setState({ index })
  }

  renderHeader = props => (
    <TabBarTop
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      labelStyle={styles.label}
      tabWidth={10}
    />
  )

  renderScene = ({ route }) => {
    return <BarryScreen />
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusbar} />
        <TabViewAnimated
          style={styles.tabsContainer}
          navigationState={this.state}
          renderScene={this.renderScene}
          renderHeader={this.renderHeader}
          onRequestChangeTab={this.handleChangeTab}
        />
      </View>
    )
  }
}
