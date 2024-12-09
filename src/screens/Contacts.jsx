import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Burger from '../images/icons/burger.png';
import Cart from '../images/icons/cart.png';
import Logo from '../images/icons/main-logo.png';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../helpers/customColor';
import CustomButton from '../components/CustomButton';

export default function Contacts() {
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

      <Text style={styles.title}>Контакты</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Номер телефона'}
          placeholderTextColor={COLORS.black}
          editable={false}
        />

        <TextInput
          style={styles.input}
          placeholder={'Город'}
          placeholderTextColor={COLORS.black}
          editable={false}
        />

        <TextInput
          style={styles.input}
          placeholder={'Индекс'}
          placeholderTextColor={COLORS.black}
          editable={false}
        />

        <TextInput
          style={styles.input}
          placeholder={'Страна'}
          placeholderTextColor={COLORS.black}
          editable={false}
        />
      </View>

      <CustomButton
        text={'НА ГЛАВНУЮ'.toUpperCase()}
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
  title: {
    fontFamily: 'Rubik-ExtraBold',
    fontWeight: '900',
    color: COLORS.black,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 15,
  },
  input: {
    borderRadius: 15,
    borderColor: COLORS.main,
    borderWidth: 1,
    width: '85%',
    paddingLeft: 15,
    fontFamily: 'Rubik-Medium',
    color: COLORS.black,
    marginTop: 15,
    height: 40,
  },
});
