
import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

import Nav from './src/nav';
import Generator from './src/generator';
import ListItem from './src/listItem';

class App extends Component {

  state = {
    nameOfApp: 'My awesome App',
    random: []
  }

  onAddNumber = () => {
    const random = Math.floor(Math.random() * 1000)
    this.setState(prevState => {
      return {
        random:[...prevState.random, random]
      }
    })
  }

  onItemDelete = (id) => {
    const newArray = this.state.random.filter((item, i) => {
      return id !== i
    })
    this.setState({ random: newArray })
  }

  render() {
    return (
      <View style={styles.mainView}>

        <Nav 
          name={this.state.nameOfApp}
        />

        <View style={styles.basicView}>
          <Text style={styles.basicText}>React App</Text>
        </View>
        <View style={styles.basicView}>
          <Text style={styles.basicText}>React App</Text>
        </View>

        <Generator 
          onAddNumber={this.onAddNumber}
        />
        <ListItem 
          items={this.state.random}
          delete={this.onItemDelete}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'flex-start',
    width: '100%',
    justifyContent: 'flex-start',
  },
  basicView: {
    backgroundColor: 'green',
    marginBottom: 10,
    width: '100%',
  },
  basicText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    padding: 20
  },
  basicNumberContainer: {
    backgroundColor: '#fff',
    alignSelf: 'center'
  },  
  basicNumber: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default App
