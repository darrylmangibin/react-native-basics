import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ListItem = (props) => {
  return (
    props.items.map((item, id) => {
      return (
        <TouchableOpacity 
          key={id} 
          style={styles.listItem}
          onPress={() => props.delete(id)}
        >
          <Text style={{ color: '#fff' }}>{item}</Text>
        </TouchableOpacity>
      )
    })
  )
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#cecece',
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 5
  }
})

export default ListItem;