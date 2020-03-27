import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ScrollViewGenre from '../Components/ScrollView';
import PopularBookCard from '../Components/PopularBookCard';
import HeaderSearch from '../Components/HeaderSearch';
import {TouchableOpacity} from 'react-native-gesture-handler';

class MainPage extends Component {
  buttonBook = id => {
    this.props.navigation.push('DetailScreen', {id: id});
  };

  render() {
    return (
      <View>
        <HeaderSearch />
        <ScrollViewGenre />

        <Text style={{fontSize: 20, marginTop: 20}}>Popular Book</Text>

        <PopularBookCard onPress={this.buttonBook} />
      </View>
    );
  }
}
export default MainPage;
