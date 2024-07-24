import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

const Login = () => {
  return (
    <View>
      <Image
        source={require('@/assets/images/login.jpg')}
        style={styles.logoImg}
      />

      <View style={styles.container}>
        <Text style={styles.title}>AI Travel Planner</Text>
        <Text style={styles.subtitle}>
          Discover your next adventure effortlessly. Personalized itineraries at
          your fingertips. Travel smarter with AI-driven insights.
        </Text>

        <View style={styles.buttonContainer}>
          <Text style={styles.btnText}>Sign in with Google</Text>
        </View>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '100%',
    padding: 25,
  },
  logoImg: {
    width: '100%',
    height: 520,
  },
  title: {
    fontSize: 30,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    fontFamily: 'outfit',
    marginTop: 20,
    fontSize: 17,
    color: Colors.GRAY,
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonContainer: {
    padding: 15,
    backgroundColor: Colors.primary,
    borderRadius: 50,
    marginTop: '25%',
  },
  btnText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
  },
})
