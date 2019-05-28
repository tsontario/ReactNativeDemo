import React, { Component } from 'react';
import { View } from 'react-native';

export class FlexDimensionsBasicsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: "stretch", justifyContent: "center"}}>
        <View style={{height: 50, backgroundColor: 'skyblue'}} />
        <View style={{height: 50, backgroundColor: 'powderblue'}} />
        <View style={{height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}
