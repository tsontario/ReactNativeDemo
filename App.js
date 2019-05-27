/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import LotsOfStyles from './LotsOfStyles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    setInterval(() => (
      this.setState(previousState => (
      { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  render() {
    if (this.state.isShowingText) {
      return <View style={ {alignItems: 'center'} }>
        <Text>I is a blinky text</Text>
      </View>
    } else {
      return null
    }
  }
}

class Greeting extends Component {
  render() {
    return <View style={{alignItems: 'center'}}>
      <Text>Hello, {this.props.name}!</Text>
    </View>
  }
}

class Banana extends Component {
  render() {
    let pic = {
     uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}} />
    );
  }
}

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Greeting name="Tim" />
        <Greeting name="Luna" />
        <Banana />
        <Blink />
        <Text style={styles.welcome}>Welcomezzz to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <LotsOfStyles />
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
