import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import notfound from '../Assets/Icon/historyEmpty.png';
import Icon from 'react-native-vector-icons/FontAwesome';

const History = props => {
  const button = () => {
    props.navigation.navigate('MainPage');
  };
  return (
    <View>
      <View style={style.headerContainer}>
        <TouchableOpacity onPress={button}>
          <Icon name="arrow-left" size={25} />
        </TouchableOpacity>
        <Text style={style.historyText}>History</Text>
        <Text> </Text>
      </View>
      <View style={style.background}>
        <Image source={notfound} />
        <Text style={style.emptyText}>History Empty</Text>
      </View>
    </View>
  );
};

export default History;

const style = StyleSheet.create({
  headerContainer: {
    height: 50,
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
  },
  historyText: {
    marginRight: 20,
    fontSize: 20,
  },
  emptyText: {
    fontSize: 25,
    marginTop: 20,
  },
  background: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '40%',
  },
});
