import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Burger from '../images/icons/burger.png';
import Logo from '../images/icons/main-logo.png';
import {COLORS} from '../helpers/customColor';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../contexts/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartItem from '../components/CartItem';
import CustomButton from '../components/CustomButton';
import CartEmptyIcon from '../images/icons/cart-empty.png';

const {height} = Dimensions.get('window');
export default function Cart() {
  const navigation = useNavigation();
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getCart = async () => {
      const list = await AsyncStorage.getItem('cartList');
      if (list?.length) {
        setCart(JSON.parse(list));
      } else {
        setCart(null);
      }
    };

    getCart();
  }, [refresh]);

  useEffect(() => {
    if (cart?.length) {
      let sum = 0;
      cart.forEach(product => {
        sum += product.price * product.count;
      });

      setPrice(sum);
    }
  }, [cart, refresh]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={Burger} style={styles.burger} />
        </TouchableOpacity>

        <Image source={Logo} style={styles.logo} />

        <TouchableOpacity />
      </View>

      {!cart?.length ? (
        <View>
          <Text style={styles.headerText}>
            {'Корзина пуста...'.toUpperCase()}
          </Text>
          <View style={styles.header}>
            <Image source={CartEmptyIcon} style={styles.drawerLogo} />
          </View>
        </View>
      ) : (
        ''
      )}

      <ScrollView contentContainerStyle={styles.scrollView}>
        {cart?.length
          ? cart.map((item, index) => <CartItem cart={item} key={item.name} />)
          : ''}

        {cart?.length ? (
          <Text style={styles.check}>
            Сумма к оплате
            <Text style={styles.checkPrice}>{'    ' + price}$</Text>
          </Text>
        ) : (
          ''
        )}
      </ScrollView>

      {cart?.length ? (
        <CustomButton
          text={'ЗАКАЗАТЬ'}
          onPress={() => navigation.navigate('CartThank')}
        />
      ) : (
        <CustomButton
          text={'НА ГЛАВНУЮ'}
          onPress={() => navigation.navigate('Main')}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
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
  logo: {
    width: 200,
    height: 40,
    aspectRatio: 5,
    resizeMode: 'contain',
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  check: {
    marginTop: 50,
    fontFamily: 'Montserrat-Bold',
    fontWeight: '600',
    fontSize: 20,
    color: COLORS.black,
  },
  checkPrice: {
    fontFamily: 'Montserrat-ExtraBold',
    fontWeight: '900',
    color: COLORS.black,
  },
  headerText: {
    marginTop: height / 10,
    textAlign: 'center',
    color: COLORS.main,
    fontFamily: 'Montserrat-ExtraBold',
    fontWeight: '900',
    fontSize: 20,
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 5,
    backgroundColor: COLORS.main,
    marginTop: 10,
    paddingVertical: 10,
  },
  drawerLogo: {
    aspectRatio: 0.2,
    resizeMode: 'contain',
  },
});
