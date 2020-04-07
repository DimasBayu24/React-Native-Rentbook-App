import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ScrollViewGenre from '../Components/ScrollView';
import PopularBookCard from '../Components/PopularBookCard';
import HeaderSearch from '../Components/HeaderSearch';
import {ScrollView} from 'react-native-gesture-handler';

class MainPage extends Component {
  buttonBook = id => {
    this.props.navigation.push('DetailScreen', {id: id});
  };

  buttonGenre = id_genre => {
    this.props.navigation.push('DetailGenre', {id_genre: id_genre});
  };

  render() {
    return (
      <View>
        <HeaderSearch />
        <ScrollView>
          <ScrollViewGenre onPress={this.buttonGenre} />

          <Text style={{fontSize: 20, marginTop: 20}}>Popular Book</Text>

          <PopularBookCard onPress={this.buttonBook} />
        </ScrollView>
      </View>
    );
  }
}
export default MainPage;
