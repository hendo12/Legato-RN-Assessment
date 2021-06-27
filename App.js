import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import background from './assets/background.jpg';
import logo from './assets/logo.webp'

const Signup = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.image} imageStyle={{ opacity: 0.45 }}>
        <View style={styles.contentContainer}>
          <Image source={logo} style={styles.logo} />
          <View>
            <Text style={styles.header}>Create</Text>
            <Text style={styles.header}>Connect</Text>
            <Text style={styles.header}>Collaborate</Text>
          </View>
          <Pressable title="Sign in / Join" accessibilityLabel="Sign in or Sign Up" style={styles.button} >
            <Text style={styles.buttonText}>Sign in / Join</Text>
          </Pressable>
        </View>
      </ImageBackground>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const AppNavigator = createStackNavigator({
  Signup: {
    screen: Signup,
    navigationOptions: ({ navigation }) => ({
      // headerMode: 'none',
      headerShown: false
    }),
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    padding: 24,
    paddingBottom: 72,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    height: '70%',
    justifyContent: 'space-between'
  },
  logo: {
    width: 200,
    height: 100,
    alignSelf: 'center'
  },
  header: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    paddingVertical: 8,
    letterSpacing: 2
  },
  button: {
    color: 'white',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 6
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  }
});

export default createAppContainer(AppNavigator);