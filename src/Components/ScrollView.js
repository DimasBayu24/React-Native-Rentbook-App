import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {getAllGenre} from '../Redux/actions/genre';
import {TouchableOpacity} from 'react-native-gesture-handler';

const mapStateToProps = genre => {
  return {
    genre,
  };
};

class ScrollViewGenre extends Component {
  state = {
    genre: [],
  };
  getGenre = async () => {
    await this.props.dispatch(getAllGenre());
    this.setState({
      genre: this.props.genre.genre.genreData,
    });
  };
  componentDidMount = () => {
    this.getGenre();
  };
  render() {
    return (
      <View>
        <ScrollView
          style={style.container}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          automaticallyAdjustContentInsets={true}>
          {this.state.genre.map((item, index) => (
            <TouchableOpacity onPress={() => this.props.onPress(item.id_genre)}>
              <View key={item.id_genre} style={style.item}>
                <Text style={{fontSize: 40, marginTop: 10, marginLeft: 20}}>
                  {item.genre_name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}
export default connect(mapStateToProps)(ScrollViewGenre);

const style = StyleSheet.create({
  container: {
    height: 150,
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
