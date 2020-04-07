import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import {getSearch} from '../Redux/actions/books';
import {useDispatch, connect} from 'react-redux';

const mapStateToProps = search => {
  return {
    search,
  };
};

const HeaderSearch = props => {
  const dispatch = useDispatch();

  const [searchState, setSearch] = useState({
    search: '',
  });
  const [resultState, setResult] = useState('');
  const [res, setRes] = useState([]);

  const getSearchBook = async search => {
    await dispatch(getSearch(search));
    setRes(props.search.search.searchData.data.result);
  };

  const handleSearch = async search => {
    // await setSearch({search});
    await setResult(search);
    await dispatch(getSearch(search));
    setRes(props.search.search.searchData.data.result);
  };

  // const searchResult = () => {
  //   return resultState.length < 1 ? (
  //     <Text>hahahah</Text>
  //   ) : (
  //     <View>
  //       <Image style={style.bookSmall} source={{uri: resultState.img}} />
  //       <Text style={style.textTitle}>{resultState.title}</Text>
  //     </View>
  //   );
  // };

  return (
    <View style={style.containerHeader}>
      <Text>BOOKZ</Text>
      <View style={style.searchBox}>
        <TextInput
          style={style.searchHeader}
          value={resultState}
          onChangeText={search => handleSearch(search)}
          placeholder="Search Book"
        />
        <View>
          {res.length < 1 ? (
            <Text style={style.textTitle}>1</Text>
          ) : (
            res.map(item => {
              return <Text style={style.textTitle}>{item.title}</Text>;
            })
          )}
        </View>
      </View>
    </View>
  );
};
export default connect(mapStateToProps)(HeaderSearch);

const style = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  searchHeader: {
    width: '60%',
    height: '70%',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: '#E5E6EE',
    paddingLeft: 30,
    paddingRight: 20,
    fontSize: 15,
  },
  textTitle: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  searchBox: {
    flexDirection: 'row',
  },
});
