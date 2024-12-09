import React, {useContext, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Burger from '../images/icons/burger.png';
import Cart from '../images/icons/cart.png';
import Logo from '../images/icons/main-logo.png';
import {COLORS} from '../helpers/customColor';
import {producs} from '../products/producs';
import Card from '../components/Card';
import {GlobalContext} from '../contexts/GlobalContext';

const {height} = Dimensions.get('window');
export default function Main() {
  const navigation = useNavigation();
  const [category, setCategory] = useState(0);
  const {refresh, setRefresh} = useContext(GlobalContext);
  return (
    <SafeAreaView>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={Burger} style={styles.burger} />
        </TouchableOpacity>

        <Image source={Logo} style={styles.logo} />

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image source={Cart} style={styles.cart} />
        </TouchableOpacity>
      </View>

      <View style={styles.categories}>
        <TouchableOpacity
          onPress={() => {
            setCategory(0);
            setRefresh(!refresh);
          }}
          style={!category ? styles.active : styles.category}>
          <Text style={!category ? styles.activeText : styles.categoryText}>
            Классические бургеры
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCategory(1);
            setRefresh(!refresh);
          }}
          style={category === 1 ? styles.active : styles.category}>
          <Text
            style={category === 1 ? styles.activeText : styles.categoryText}>
            Специальные бургеры
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCategory(2);
            setRefresh(!refresh);
          }}
          style={category === 2 ? styles.active : styles.category}>
          <Text
            style={category === 2 ? styles.activeText : styles.categoryText}>
            Закуски и дополнения
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setCategory(3);
            setRefresh(!refresh);
          }}
          style={category === 3 ? styles.active : styles.category}>
          <Text
            style={category === 3 ? styles.activeText : styles.categoryText}>
            Сэндвичи
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {producs[category].map((item, index) => (
          <Card item={item} key={item.name} />
        ))}
      </ScrollView>
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
    backgroundColor: COLORS.mainBackground,
  },
  burger: {
    width: 30,
    height: 25,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  cart: {
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
  categories: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
    paddingBottom: 10,
  },
  scroll: {
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'stretch',
    paddingBottom: height / 2,
  },
  category: {
    width: '100%',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.main,
    marginTop: 8,
    paddingVertical: 8,
  },
  active: {
    width: '100%',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLORS.main,
    marginTop: 8,
    paddingVertical: 8,
    backgroundColor: COLORS.main,
  },
  categoryText: {
    textAlign: 'center',
    fontFamily: 'Rubik-Bold',
    color: COLORS.black,
    fontSize: 17,
  },
  activeText: {
    textAlign: 'center',
    fontFamily: 'Rubik-Bold',
    color: COLORS.white,
    fontSize: 17,
  },
});
