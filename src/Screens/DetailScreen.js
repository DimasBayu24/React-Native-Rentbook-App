import React from 'react';
import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import bookExample from '../Assets/Image/bookExample.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DetailScreen = props => {
  const button = () => {
    props.navigation.navigate('MainPage');
  };

  return (
    <View>
      <ImageBackground style={style.containerImg} source={bookExample}>
        <View>
          <TouchableOpacity onPress={button}>
            <Icon name="arrow-left" size={25} style={style.arrowBack} />
          </TouchableOpacity>
          <View>
            <Text>Upin & Ipin</Text>
            <Image style={style.bookSmall} source={bookExample} />
          </View>
        </View>
      </ImageBackground>
      <View>
        <ScrollView
          style={style.textContainer}
          vertical={true}
          automaticallyAdjustContentInsets={true}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
            nisl facilisis, mattis elit nec, commodo massa. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Cras placerat nisi et nunc
            vulputate, a eleifend enim mollis. Duis et fringilla magna, eu
            lobortis ligula. Aliquam at augue ipsum. Nam purus sem, aliquam quis
            gravida a, luctus imperdiet mi. Quisque at nunc nunc. Fusce iaculis
            mi elit, et placerat erat vulputate a. Mauris hendrerit lectus quam,
            in facilisis neque sollicitudin quis. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus
            pulvinar aliquet felis eu tincidunt. Duis non iaculis odio. Nunc
            facilisis nulla sit amet nisl porttitor, ac ultricies quam
            hendrerit. Morbi mattis mauris id facilisis viverra. Maecenas
            molestie iaculis viverra. Aenean sem massa, lacinia id bibendum
            vitae, vulputate a lacus. Aliquam nulla risus, imperdiet id diam
            vel, efficitur tristique sem. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat
            volutpat. Ut nec lorem massa. Proin a interdum leo. Ut consequat
            semper semper. Sed auctor nulla sit amet risus commodo, sit amet
            tincidunt lacus mollis. Sed mollis mattis urna et malesuada. Nunc
            interdum velit at massa sagittis, at vulputate metus interdum. Donec
            eu cursus ante. Nam non urna sit amet diam luctus vestibulum et
            volutpat odio. Duis sodales congue semper.
          </Text>
          <TouchableOpacity>
            <Text style={style.rentBook}>RENT</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailScreen;

const style = StyleSheet.create({
  containerImg: {
    width: '100%',
    height: 300,
  },
  arrowBack: {
    color: 'white',
    margin: 10,
  },
  textContainer: {
    height: 360,
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
    width: '22%',
    height: '30%',
  },
});
