import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  const button = () => {
    AsyncStorage.removeItem('token');
    navigation.navigate('Login');
  };
  return (
    <View>
      <View style={style.headerContainer}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={25} />
        </TouchableOpacity>
        <Text style={style.textProfile}>Profile</Text>
        <Text> </Text>
      </View>
      <View style={style.userIcon}>
        <Icon name="user" size={50} />
        <TouchableOpacity onPress={button} style={style.containerTouch}>
          <Text style={{fontSize: 20}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const style = StyleSheet.create({
  textProfile: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerContainer: {
    alignItems: 'center',
    borderBottomWidth: 1,
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  containerTouch: {
    backgroundColor: 'grey',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
  },
});
