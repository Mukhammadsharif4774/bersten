import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {COLORS} from './helpers/customColor';
import Main from './screens/Main';
import Cart from './screens/Cart';
import CartThank from './screens/CartThank';
import Book from './screens/Book';
import BookThank from './screens/BookThank';
import Contacts from './screens/Contacts';
import SportTranslations from './screens/SportTranslations';
import EventMenu from './screens/EventMenu';
import BurgerClash from './screens/BurgerClash';
import InternationalBurger from './screens/InternationalBurger';
import Craft from './screens/Craft';
import Cinemas from './screens/Cinemas';
import SportDay from './screens/SportDay';
import Logo from './images/icons/main-logo.png';
import CartIcon from './images/icons/main-cart.png';
import Close from './images/icons/close-i.png';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const {width, height} = Dimensions.get('window');
export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          component={DrawerNavigator}
          name="DrawerNavigator"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: width,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerNavigator {...props} />}>
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="CartThank" component={CartThank} />
      <Drawer.Screen name="Book" component={Book} />
      <Drawer.Screen name="BookThank" component={BookThank} />
      <Drawer.Screen name="Contacts" component={Contacts} />
      <Drawer.Screen name="SportTranslations" component={SportTranslations} />
      <Drawer.Screen name="EventMenu" component={EventMenu} />
      <Drawer.Screen name="BurgerClash" component={BurgerClash} />
      <Drawer.Screen
        name="InternationalBurger"
        component={InternationalBurger}
      />
      <Drawer.Screen name="Craft" component={Craft} />
      <Drawer.Screen name="Cinemas" component={Cinemas} />
      <Drawer.Screen name="SportDay" component={SportDay} />
    </Drawer.Navigator>
  );
}

function CustomDrawerNavigator(props) {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.closeIconContainer}>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Image source={Close} style={styles.close} />
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Image source={Logo} style={styles.drawerLogo} />
        </View>

        <View style={styles.mainContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DrawerNavigator', {screen: 'Main'})
            }
            style={styles.drawerFirstItem}>
            <Text style={styles.itemFirstText}>{'Главная'.toUpperCase()}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DrawerNavigator', {screen: 'Cart'})
            }
            style={styles.drawerItem}>
            <Text style={styles.itemText}>{'Корзина'.toUpperCase()}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DrawerNavigator', {
                screen: 'SportTranslations',
              })
            }
            style={styles.drawerItem}>
            <Text style={styles.itemText}>{'Транслации'.toUpperCase()}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DrawerNavigator', {
                screen: 'Contacts',
              })
            }
            style={styles.drawerItem}>
            <Text style={styles.itemText}>{'Контакты'.toUpperCase()}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DrawerNavigator', {
                screen: 'Book',
              })
            }
            style={styles.drawerItem}>
            <Text style={styles.itemText}>
              {'Резерв столика'.toUpperCase()}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('DrawerNavigator', {
                screen: 'EventMenu',
              })
            }
            style={styles.drawerItem}>
            <Text style={styles.itemText}>{'События'.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DrawerNavigator', {
              screen: 'Cart',
            })
          }>
          <View>
            <Image source={CartIcon} style={styles.basket} />
          </View>
        </TouchableOpacity>
      </View>
    </>
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
  drawerFirstItem: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: COLORS.white,
    borderRadius: 25,
    borderColor: COLORS.main,
    borderWidth: 4,
  },
  itemFirstText: {
    color: COLORS.main,
    fontWeight: '900',
    fontSize: 22,
    fontFamily: 'Montserrat-ExtraBold',
  },
  drawerItem: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 7,
    borderRadius: 25,
    borderColor: COLORS.main,
    borderWidth: 4,
  },
  itemText: {
    color: COLORS.white,
    fontWeight: '900',
    fontSize: 22,
    fontFamily: 'Montserrat-ExtraBold',
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
    fontFamily: 'Montserrat-Bold',
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
    marginTop: height / 20,
  },
  drawerLogo: {
    aspectRatio: 2,
    resizeMode: 'contain',
  },
  basket: {
    width: 40,
    height: 40,
    marginTop: 20,
  },
});
