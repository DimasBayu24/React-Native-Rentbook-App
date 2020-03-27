import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const HeaderSearch = props => {
  return (
    <View style={style.containerHeader}>
      <Text>BOOKZ</Text>
      <TextInput style={style.searchHeader} placeholder="Search Book" />
    </View>
  );
};
export default HeaderSearch;

const style = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  searchHeader: {
    width: '60%',
    height: '70%',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: '#E5E6EE',
    paddingLeft: 30,
    paddingRight: 20,
    fontSize: 15,
  },
});
