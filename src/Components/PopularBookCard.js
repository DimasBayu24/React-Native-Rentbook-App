import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllBook} from '../Redux/actions/books';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const mapStateToProps = book => {
  return {
    book,
  };
};

class PopularBookCard extends Component {
  state = {
    book: [],
  };
  getBook = async () => {
    await this.props.dispatch(getAllBook());
    this.setState({
      book: this.props.book.book.bookData.data,
    });
  };
  componentDidMount = () => {
    this.getBook();
    console.log('book', this.state.book);
  };

  BookItem = ({item}) => {
    return (
      // <View style={(styles.item, {backgroundColor: {color}})}>
      <TouchableOpacity onPress={() => this.props.onPress(item.id)}>
        <View style={[styles.item]}>
          <View>
            <Image
              style={{width: 145, height: 205, borderRadius: 15}}
              source={{uri: item.img}}
            />
            <Text>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          numColumns={2}
          vertical={true}
          data={this.state.book}
          renderItem={this.BookItem}
          keyExtractor={item => String(item.id)}
        />
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps)(PopularBookCard);

const styles = StyleSheet.create({
  container: {
    margin: 30,
    marginBottom: 497,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    borderRadius: 25,
    width: 150,
    height: 250,
    padding: 0,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  title: {
    fontSize: 32,
  },
});
