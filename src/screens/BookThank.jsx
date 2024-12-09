import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Burger from '../images/icons/burger.png';
import Cart from '../images/icons/cart.png';
import Logo from '../images/icons/main-logo.png';
import {COLORS} from '../helpers/customColor';
import Smile from '../images/icons/reserve-thank.png';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

export default function BookThank() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={Burger} style={styles.burger} />
        </TouchableOpacity>

        <Image source={Logo} style={styles.logo} />

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image source={Cart} style={styles.parcel} />
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>Спасибо за {'\n'} резерв!</Text>

      <View style={styles.qrContainer}>
        <Image source={Smile} style={styles.smile} />
      </View>

      <CustomButton
        text={'НА ГЛАВНУЮ'}
        onPress={() => navigation.navigate('Main')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  logo: {
    width: 200,
    height: 40,
    aspectRatio: 5,
    resizeMode: 'contain',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: COLORS.logoBackgroundColor,
  },
  burger: {
    width: 30,
    height: 25,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  parcel: {
    width: 28,
    height: 30,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 6,
    backgroundColor: COLORS.logoBackgroundColor,
    marginTop: height / 10,
  },
  drawerLogo: {
    aspectRatio: 1.8,
    resizeMode: 'contain',
  },
  qrContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  smile: {
    aspectRatio: 1.8,
    resizeMode: 'contain',
    width: width / 3,
    height: height / 6,
  },
  text: {
    marginTop: height / 10,
    textAlign: 'center',
    color: COLORS.main,
    fontFamily: 'Rubik-ExtraBold',
    fontWeight: '900',
    fontSize: 30,
  },
});
