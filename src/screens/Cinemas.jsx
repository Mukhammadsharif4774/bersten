import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Background from '../images/backgrounds/События3.png';
import Back from '../images/icons/back.png';
import {COLORS} from '../helpers/customColor';

const {height} = Dimensions.get('window');
export default function Cinemas() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={Background}
      style={styles.container}
      imageStyle={styles.background}>
      <TouchableOpacity onPress={() => navigation.navigate('EventMenu')}>
        <Image style={styles.back} source={Back} />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>10 мая 2024</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    paddingTop: 30,
    paddingLeft: 20,
  },
  background: {
    height: height,
    resizeMode: 'stretch',
    paddingTop: 50,
  },
  back: {
    width: 50,
    height: 35,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Rubik-Medium',
    fontWeight: '500',
    color: COLORS.white,
    fontSize: 16,
    textAlign: 'center',
  },
  titleContainer: {
    position: 'absolute',
    top: height / 2.9,
    left: '35%',
    backgroundColor: COLORS.main,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 15,
  },
});
