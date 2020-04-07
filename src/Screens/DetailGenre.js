import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
const URL_STRING = 'http://192.168.100.168:3009/api/v1/genre/';

const DetailGenre = props => {
  const route = useRoute();

  const buttonBook = id => {
    props.navigation.push('DetailScreen', {id: id});
  };

  const buttonBack = () => {
    props.navigation.push('MainPage');
  };

  const idGenre = route.params.id_genre;

  const [genreData, setGenreData] = useState([]);
  useEffect(() => {
    const renderData = async () => {
      await getGenreData();
    };
    renderData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getGenreData = () => {
    Axios.get(URL_STRING + idGenre)
      .then(({data}) => {
        setGenreData(data.result);
      })
      .catch(err => console.log(err));
  };
  return (
    <View>
      <View style={style.headerContainer}>
        <TouchableOpacity onPress={buttonBack}>
          <Icon name="arrow-left" size={25} />
        </TouchableOpacity>
        <Text style={style.historyText}>Book By Genre</Text>
        <Text> </Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
        showsHorizontalScrollIndicator={false}
        automaticallyAdjustContentInsets={true}>
        {genreData.map(item => (
          <TouchableOpacity
            onPress={() => buttonBook(item.id)}
            style={style.containerCard}
            key={item.id}>
            <Image
              style={{
                height: 200,
                width: 150,
                marginBottom: 5,
                borderRadius: 10,
              }}
              source={{uri: item.img}}
            />
            <Text ellipsizeMode="tail" numberOfLines={1}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default DetailGenre;

const style = StyleSheet.create({
  headerContainer: {
    height: 50,
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
  },
  historyText: {
    marginRight: 20,
    fontSize: 20,
  },
  containerCard: {
    width: 150,
    height: 225,
    marginVertical: 10,
  },
});
