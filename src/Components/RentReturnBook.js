import React from 'react';
import {useDispatch, connect} from 'react-redux';
import {rentBookRedux, returnBook} from '../Redux/actions/detail';
import {TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const mapStateToProps = detail => {
  return {
    detail,
  };
};

const RentReturnBook = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const rentBookData = () => {
    // setRent({
    //   ...setRent,
    // //   availability: 'false',
    // });

    dispatch(rentBookRedux(props.data.id));

    navigation.navigate('MainPage');
  };

  const returnBookData = () => {
    // const { available } = this.state;
    // setRent({
    //   ...setRent,
    // //   availability: 'true',
    // });

    dispatch(returnBook(props.data.id));

    navigation.navigate('MainPage');
  };

  //   const bookAvailability = rentState.availability;

  //   let buttonStatus;
  //   if (bookAvailability === 'true') {
  //     buttonStatus = (
  //       <TouchableOpacity onPress={rentBookData}>
  //         <Text>Borrow</Text>
  //       </TouchableOpacity>
  //     );
  //   } else {
  //     buttonStatus = (
  //       <TouchableOpacity onPress={returnBookData}>
  //         <Text>Return</Text>
  //       </TouchableOpacity>
  //     );
  //   }

  //   return {buttonStatus};

  return props.data.availability === 'true' ? (
    <TouchableOpacity
      onPress={() =>
        Alert.alert(
          'Confirm',
          'Are you sure to borrow this book?',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: rentBookData,
            },
          ],
          {cancelable: false},
        )
      }>
      <Text style={style.rentBook}>Borrow</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={() => alert('Book is not available')}>
      <Text style={style.cantRentBook}>Borrow</Text>
    </TouchableOpacity>
  );
};

export default connect(mapStateToProps)(RentReturnBook);

const style = StyleSheet.create({
  rentBook: {
    marginVertical: 10,
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 55,
    alignSelf: 'center',
    borderRadius: 25,
    backgroundColor: '#F4CF5D',
  },
  cantRentBook: {
    marginVertical: 10,
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 55,
    alignSelf: 'center',
    borderRadius: 25,
    backgroundColor: 'red',
    color: 'white',
  },
});
