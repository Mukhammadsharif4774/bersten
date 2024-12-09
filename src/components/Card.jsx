import React, {useContext, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GlobalContext} from '../contexts/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS} from '../helpers/customColor';

export default function Card({item}) {
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [added, setAdded] = useState(false);
  const add = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (!existProduct) {
        cartArray.push(product);
        await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
      }
    } else {
      const cartArray = [];
      cartArray.push(product);
      await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
    }
    await setRefresh(!refresh);
  };

  const trash = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (existProduct) {
        const newArray = cartArray.filter(cart => cart.name !== product.name);
        await AsyncStorage.setItem('cartList', JSON.stringify(newArray));
      }
    }
    await setRefresh(!refresh);
  };

  const define = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (existProduct) {
        trash(product);
      } else {
        add(product);
      }
    } else {
      add(product);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList) {
        const cartArray = JSON.parse(cartList);
        const existProduct = cartArray.find(cart => cart.name === item.name);
        if (existProduct) {
          setAdded(true);
        } else {
          setAdded(false);
        }
      } else {
        setAdded(false);
      }
    };

    getProduct();
  }, [refresh]);
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />

      <Text style={styles.name}>{item.name}</Text>

      <Text style={styles.description}>{item.description}</Text>

      <View style={styles.row}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.price}$</Text>
        </View>

        {added ? (
          <TouchableOpacity style={styles.addedButton}>
            <Text style={styles.buttonText}>ДОБАВЛЕНО</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={() => define(item)}>
            <Text style={styles.buttonText}>КУПИТЬ</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    width: '100%',
    marginTop: 10,
  },
  image: {
    height: 140,
    width: '100%',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  name: {
    color: COLORS.black,
    fontFamily: 'Rubik-ExtraBold',
    fontWeight: '900',
    fontSize: 16,
    paddingTop: 10,
  },
  description: {
    color: COLORS.black,
    fontFamily: 'Rubik-Regular',
    fontWeight: '400',
    fontSize: 10,
    paddingTop: 3,
    height: 30,
  },
  price: {
    fontFamily: 'Rubik-Bold',
    fontSize: 14,
    color: COLORS.white,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  button: {
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: COLORS.main,
    marginLeft: 5,
  },
  buttonText: {
    fontFamily: 'Rubik-Bold',
    fontSize: 13,
    color: COLORS.white,
    fontWeight: '700',
  },
  priceContainer: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.main,
    paddingHorizontal: 5,
    paddingVertical: 3,
    backgroundColor: COLORS.main,
  },
  addedButton: {
    borderRadius: 25,
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: COLORS.main,
    marginLeft: 5,
  },
});
