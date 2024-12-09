import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Burger from '../images/icons/burger.png';
import Cart from '../images/icons/cart.png';
import Logo from '../images/icons/main-logo.png';
import {COLORS} from '../helpers/customColor';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

export default function SportTranslations() {
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
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>MLB</Text>
              </View>

              <Text style={styles.time}>13.06 - 00:50</Text>
            </View>

            <View style={styles.texts}>
              <Text style={styles.text}>New York Yankees</Text>
              <Text style={styles.text}>Boston Red Sox</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>NFL</Text>
              </View>

              <Text style={styles.time}>28.06 - 00:30</Text>
            </View>

            <View style={styles.texts}>
              <Text style={styles.text}>Dallas Cowboys</Text>
              <Text style={styles.text}>New York Giants</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>NBA</Text>
              </View>

              <Text style={styles.time}>05.07 - 00:15</Text>
            </View>

            <View style={styles.texts}>
              <Text style={styles.text}>Los Angeles Lakers</Text>
              <Text style={styles.text}>Boston Celtics</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>NHL</Text>
              </View>

              <Text style={styles.time}>10.07 - 00:05</Text>
            </View>

            <View style={styles.texts}>
              <Text style={styles.text}>New York Rangers</Text>
              <Text style={styles.text}>Philadelphia Flyers</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
  main: {
    width: '100%',
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
  title: {
    fontFamily: 'Rubik-ExtraBold',
    fontWeight: '900',
    fontSize: 40,
    color: COLORS.black,
  },
  card: {
    flexDirection: 'column',
    marginTop: 15,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  time: {
    fontFamily: 'Rubik-Regular',
    fontWeight: '400',
    fontSize: 11,
    color: COLORS.black,
    textAlign: 'center',
    marginBottom: 10,
    marginLeft: 10,
  },
  texts: {
    marginLeft: 10,
  },
  text: {
    fontFamily: 'Rubik-Light',
    fontWeight: '300',
    fontSize: 22,
    color: COLORS.black,
    marginTop: 2,
    letterSpacing: 1.2,
  },
});
