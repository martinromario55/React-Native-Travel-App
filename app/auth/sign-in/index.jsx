import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const SignIn = () => {
  const navigation = useNavigation()
  const router = useRouter()

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerText}>Let's Sign You In</Text>
      <Text style={styles.subText}>Welcome Back!</Text>
      <Text style={styles.subText}>You've been missed</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput style={styles.input} placeholder="Email address" />

        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry
        />

        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.createAccountContainer}
          onPress={() => router.replace('auth/sign-up')}
        >
          <Text style={styles.createAccountText}>Create an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 40,
    backgroundColor: Colors.WHITE,
    height: '100%',
  },
  headerText: {
    marginTop: 30,
    fontSize: 30,
    fontFamily: 'outfit-bold',
  },
  subText: {
    marginTop: 20,
    fontSize: 30,
    color: Colors.GRAY,
    fontFamily: 'outfit',
  },
  inputContainer: {
    marginTop: 50,
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 18,
    fontFamily: 'outfit',
    marginVertical: 10,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 15,
    fontSize: 16,
    fontFamily: 'outfit',
  },
  btnContainer: {
    padding: 20,
    backgroundColor: Colors.primary,
    borderRadius: 15,
    marginTop: 30,
  },
  btnText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontFamily: 'outfit-bold',
    textAlign: 'center',
  },
  forgotPasswordContainer: {
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'outfit',
  },
  forgotPasswordText: {
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
  createAccountContainer: {
    marginTop: 10,
    padding: 20,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderRadius: 15,
  },
  createAccountText: {
    color: Colors.primary,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'outfit',
  },
})
