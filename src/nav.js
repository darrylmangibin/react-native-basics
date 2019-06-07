import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Nav = (props) => {
  return (
    <View style={styles.nav}>
      <Text>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor: 'red',
    alignItems: 'center',
    width: '100%',
    padding: 10
  }
});

export default Nav