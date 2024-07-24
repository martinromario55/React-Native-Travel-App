import {
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { createAccount } from '../_actions'

const SignUp = () => {
  const navigation = useNavigation()
  const router = useRouter()

  const [Email, setEmail] = useState()
  const [Password, setPassword] = useState()
  const [fullName, setFullName] = useState()

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  const handleSignUp = () => {
    // Check if all fields are provided
    if (!Email || !Password || !fullName) {
      // alert('Please fill in all fields.')
      ToastAndroid.show('Please enter all details', ToastAndroid.BOTTOM)
      return
    }
    // Create account with provided email and password
    createAccount(Email, Password).then(() => {
      // Navigate to home screen
      router.replace('auth/sign-in')
    })
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.headerText}>Create New Account</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Full Name"
          onChangeText={value => setFullName(value)}
        />

        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email address"
          onChangeText={value => setEmail(value)}
        />

        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={value => setPassword(value)}
        />

        {/* <Text style={styles.inputLabel}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
        /> */}

        <TouchableOpacity onPress={handleSignUp} style={styles.btnContainer}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.alreadyHaveAccountContainer}
          onPress={() => router.replace('auth/sign-in')}
        >
          <Text style={styles.alreadyHaveAccountText}>
            Already have an account?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    padding: 25,
    backgroundColor: Colors.WHITE,
    height: '100%',
  },
  headerText: {
    marginTop: 30,
    fontSize: 30,
    fontFamily: 'outfit-bold',
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
  alreadyHaveAccountContainer: {
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'outfit',
  },
  alreadyHaveAccountText: {
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
})
