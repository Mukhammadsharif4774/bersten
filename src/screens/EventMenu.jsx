import React from 'react';
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

const {height} = Dimensions.get('window');
export default function EventMenu() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: COLORS.mainBackground}}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={Burger} style={styles.burger} />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Image source={Logo} style={styles.drawerLogo} />
      </View>

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <View style={styles.drawerContainer}>
              <Text style={styles.drawerDate}>15 июня 2024</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('BurgerClash')}
                style={styles.drawerFirstItem}>
                <Text style={styles.itemFirstText}>Бургер Битва</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.drawerContainer}>
              <Text style={styles.drawerDate}>20 июня 2024</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('InternationalBurger')}
                style={styles.drawerFirstItem}>
                <Text style={styles.itemFirstText}>
                  Международный Бургер Фестиваль
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.drawerContainer}>
              <Text style={styles.drawerDate}>10 мая 2024</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Cinemas')}
                style={styles.drawerFirstItem}>
                <Text style={styles.itemFirstText}>
                  Бургерный Фестиваль Фильмов
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.drawerContainer}>
              <Text style={styles.drawerDate}>30 октября 2024</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Craft')}
                style={styles.drawerFirstItem}>
                <Text style={styles.itemFirstText}>Крафтовый Пивной Фест</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.drawerContainer}>
              <Text style={styles.drawerDate}>10 июля 2024</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SportDay')}
                style={styles.drawerFirstItem}>
                <Text style={styles.itemFirstText}>Спортивный День</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 60,
    alignItems: 'center',
    backgroundColor: COLORS.mainBackground,
  },
  mainContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logoContainer: {
    width: '100%',
    height: 150,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 50,
  },
  logo: {
    width: '80%',
    height: '80%',
  },
  drawerContainer: {
    width: '90%',
    marginTop: 10,
  },
  drawerDate: {
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 14,
    fontFamily: 'Rubik-Bold',
    textAlign: 'center',
    marginBottom: 2,
    marginRight: 2,
  },
  drawerFirstItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
    borderRadius: 15,
  },
  itemFirstText: {
    color: COLORS.main,
    fontWeight: '900',
    fontSize: 18,
    fontFamily: 'Rubik-ExtraBold',
    textAlign: 'center',
  },
  drawerItem: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  itemText: {
    color: COLORS.white,
    fontWeight: '900',
    fontSize: 22,
    fontFamily: 'Rubik-ExtraBold',
  },
  icon: {
    width: 25,
    height: 25,
  },
  footer: {
    justifyContent: 'center',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 30,
    fontFamily: 'Rubik-Bold',
  },
  transform: {
    transform: 'scale(0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 30,
  },
  closeIconContainer: {
    position: 'absolute',
    left: 20,
    right: 0,
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  close: {
    width: 40,
    height: 40,
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 6,
    backgroundColor: COLORS.mainBackground,
  },
  drawerLogo: {
    aspectRatio: 2,
    resizeMode: 'contain',
  },
  basket: {
    width: 60,
    height: 60,
    marginTop: 20,
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
});
