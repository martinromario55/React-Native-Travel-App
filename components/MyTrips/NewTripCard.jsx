import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

const NewTripCard = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text style={styles.text}>No trips planned yet.</Text>
      <Text style={styles.subText}>
        Looks like it's time to plan a new travel experience! Get started below.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Start New Trip</Text>
      </TouchableOpacity>
    </View>
  )
}

export default NewTripCard

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
    alignItems: 'center',
    gap: 25,
    backgroundColor: Colors.WHITE,
    height: '100%',
  },
  text: {
    fontSize: 25,
    fontFamily: 'outfit-medium',
  },
  subText: {
    fontSize: 20,
    color: Colors.GRAY,
    marginTop: 10,
    textAlign: 'center',
    lineHeight: 24,
    fontFamily: 'outfit',
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 15,
    padding: 15,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontFamily: 'outfit-medium',
    textAlign: 'center',
  },
})
