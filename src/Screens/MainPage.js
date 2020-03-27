import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ScrollViewGenre from '../Components/ScrollView';
import PopularBookCard from '../Components/PopularBookCard';
import HeaderSearch from '../Components/HeaderSearch';
import {TouchableOpacity} from 'react-native-gesture-handler';

class MainPage extends Component {
  button = () => {
    this.props.navigation.navigate('DetailScreen');
  };

  render() {
    return (
      <View>
        <HeaderSearch />
        <ScrollViewGenre />
        <TouchableOpacity onPress={this.button}>
          <Text style={{fontSize: 20}}>Popular Book</Text>
        </TouchableOpacity>
        <PopularBookCard />
      </View>
    );
  }
}
export default MainPage;
