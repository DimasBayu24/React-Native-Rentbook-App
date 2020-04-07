import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';
import RentReturnBook from '../Components/RentReturnBook';
const URL_STRING = 'http://192.168.100.168:3009/api/v1/';

const DetailScreen = props => {
  const route = useRoute();
  const bookId = route.params.id;
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    const renderData = async () => {
      await getBookData();
    };
    renderData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getBookData = () => {
    Axios.get(URL_STRING + bookId)
      .then(({data}) => {
        setBookData(data.result[0]);
      })
      .catch(err => console.log(err));
  };

  const button = () => {
    props.navigation.navigate('MainPage');
  };

  return (
    <View>
      <ImageBackground style={style.containerImg} source={{uri: bookData.img}}>
        <View>
          <TouchableOpacity onPress={button}>
            <Icon name="arrow-left" size={25} style={style.arrowBack} />
          </TouchableOpacity>
        </View>
        <View style={style.flex}>
          <Text style={style.textTitle}>{bookData.title}</Text>
          <Image style={style.bookSmall} source={{uri: bookData.img}} />
        </View>
      </ImageBackground>
      <View>
        <ScrollView
          style={style.textContainer}
          vertical={true}
          automaticallyAdjustContentInsets={true}>
          <Text>{bookData.description}</Text>
        </ScrollView>
        <RentReturnBook data={bookData} />
      </View>
    </View>
  );
};

export default DetailScreen;

const style = StyleSheet.create({
  containerImg: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: 300,
  },
  arrowBack: {
    color: 'white',
    margin: 10,
  },
  textContainer: {
    height: 250,
    marginTop: 45,
  },
  rentBook: {
    marginVertical: 10,
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 55,
    alignSelf: 'center',
    borderRadius: 25,
    backgroundColor: '#F4CF5D',
  },
  bookSmall: {
    width: 110,
    height: 150,
    zIndex: 5,
    position: 'absolute',
    right: 10,
    top: -90,
    borderRadius: 15,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 5,
    width: 200,
  },
});
