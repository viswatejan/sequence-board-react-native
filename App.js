import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Board from './components/Board';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>SEQUENCE</Text>
        </View>
        <View style={styles.boardContainer}>
          <Board></Board>
        </View>
        <View style={styles.footer}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flexBasis: '4%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    color: '#ccc',
    marginLeft: 10,
    marginRight: 10 
  },
  boardContainer: {
    flexBasis: '80%',
    width: '100%'
  },
  footer:{
    flexBasis: '16%',
    width: '100%'
  }
});