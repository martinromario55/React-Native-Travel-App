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

const SignUp = () => {
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

      <Text style={styles.headerText}>Create New Account</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Full Name</Text>
        <TextInput style={styles.input} placeholder="Enter Full Name" />

        <Text style={styles.inputLabel}>Email</Text>
        <TextInput style={styles.input} placeholder="Email address" />

        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />

        <Text style={styles.inputLabel}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
        />

        <TouchableOpacity style={styles.btnContainer}>
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
