/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { FixedDimensionsBasicsScreen } from './FixedDimensionsBasics';
import { FlexDimensionsBasicsScreen } from './FlexDimensionsBasics';
import { PizzaTranslatorScreen } from './TextInputBasics';
import { TouchBasicsScreen } from './TouchBasics';
import { TouchAdvancedScreen } from './TouchAdvanced';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to FixedDimensionBasics"
          onPress={() => this.props.navigation.navigate("FixedDimensionsBasics")}
        />
        <Button
          title="Go to FlexDimensionBasics"
          onPress={() => this.props.navigation.navigate("FlexDimensionsBasics")}
        />
        <Button
          title="Go to Pizza Translator"
          onPress={() => this.props.navigation.navigate("PizzaTranslator")}
        />
        <Button
          title="Go to Touch Basics"
          onPress={() => this.props.navigation.navigate("TouchBasics")}
        />
        <Button
          title="Go to Touch Advanced"
          onPress={() => this.props.navigation.navigate("TouchAdvanced")}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    FixedDimensionsBasics: FixedDimensionsBasicsScreen,
    FlexDimensionsBasics: FlexDimensionsBasicsScreen,
    PizzaTranslator: PizzaTranslatorScreen,
    TouchBasics: TouchBasicsScreen,
    TouchAdvanced: TouchAdvancedScreen
  },
  {
    initialRouteName: "Home"
  }
  );

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
