import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import NewTripCard from '../../components/MyTrips/NewTripCard'

const MyTrip = () => {
  const [userTrips, setUserTrips] = useState([])

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>My Trips</Text>
        <Ionicons name="add-circle-sharp" size={50} color="black" />
      </View>

      {userTrips?.length === 0 && <NewTripCard />}
    </View>
  )
}

export default MyTrip

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 55,
    backgroundColor: Colors.WHITE,
    height: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  headerText: {
    fontSize: 35,
    fontFamily: 'outfit-bold',
  },
})
