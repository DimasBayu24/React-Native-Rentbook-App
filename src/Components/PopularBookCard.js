import React, {Component} from 'react';
import {SafeAreaView, View, FlatList, Text, StyleSheet} from 'react-native';

const genreData = [
  {
    id: '1',
    genreName: 'Novel',
    color: '#28BFDB',
  },
  {
    id: '2',
    genreName: 'Horror',
    color: '#F00',
  },
  {
    id: '3',
    genreName: 'Romance',
    color: '#EF77A3',
  },
  {
    id: '4',
    genreName: 'Novel',
    color: '#28BFDB',
  },
  {
    id: '5',
    genreName: 'Horror',
    color: '#F00',
  },
  {
    id: '6',
    genreName: 'Romance',
    color: '#EF77A3',
  },
  {
    id: '7',
    genreName: 'Novel',
    color: '#28BFDB',
  },
  {
    id: '8',
    genreName: 'Horror',
    color: '#F00',
  },
  {
    id: '9',
    genreName: 'Romance',
    color: '#EF77A3',
  },
];

function GenreItem({genreName, color}) {
  return (
    // <View style={(styles.item, {backgroundColor: {color}})}>
    <View style={[styles.item, {backgroundColor: color}]}>
      <Text style={styles.title}>{genreName}</Text>
    </View>
  );
}

class PopularBookCard extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          numColumns={2}
          vertical={true}
          data={genreData}
          renderItem={({item}) => (
            <GenreItem genreName={item.genreName} color={item.color} />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

export default PopularBookCard;

const styles = StyleSheet.create({
  container: {
    margin: 30,
    marginBottom: 520,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    borderRadius: 25,
    width: 150,
    height: 250,
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  title: {
    fontSize: 32,
  },
});
