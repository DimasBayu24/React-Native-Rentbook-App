import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

class ScrollViewGenre extends Component {
  state = {
    names: [
      {name: 'Ben', id: 1},
      {name: 'Susan', id: 2},
      {name: 'Robert', id: 3},
      {name: 'Mary', id: 4},
      {name: 'Daniel', id: 5},
      {name: 'Laura', id: 6},
      {name: 'John', id: 7},
    ],
  };
  render() {
    return (
      <View>
        <ScrollView
          style={style.container}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          automaticallyAdjustContentInsets={true}>
          {this.state.names.map((item, index) => (
            <View key={item.id} style={style.item}>
              <Text>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}
export default ScrollViewGenre;

const style = StyleSheet.create({
  container: {
    height: 175,
  },
  item: {
    width: 300,
    borderRadius: 25,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1',
    marginHorizontal: 25,
  },
});
