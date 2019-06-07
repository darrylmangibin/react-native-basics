import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const generate = (props) => {
  return (
    <TouchableOpacity
      style={styles.generate}
      onPress={props.onAddNumber}
    >
        <Text style={{ color: '#fff' }}>Add number</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  generate: {
    backgroundColor: '#00bcd4',
    padding: 10,
    width: '100%',
    alignItems: 'center'
  }
});

export default generate;