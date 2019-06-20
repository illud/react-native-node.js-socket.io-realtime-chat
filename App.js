/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Button  } from 'react-native';
import SocketIOClient from 'socket.io-client';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.socket = SocketIOClient('http://192.168.11.65:3000'); // replace 'environment.serverUrl' with your server url
    this.socket.emit('channel1', {message: 'Hi server'}); // emits 'hi server' to your server

    // Listens to channel2 and display the data recieved
    this.socket.on('channel1', (data) => {
      alert(data.message);
      console.log('Data recieved from server', data.message); //this will console 'channel 2'
    });
  }

  clicked = () => {
    this.socket.emit('channel1', {message: 'click'});
  }

  render() {
    return (
      <View>
        <Text>Socket.io with react native</Text>
        <Button title="Click" onPress={this.clicked}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
