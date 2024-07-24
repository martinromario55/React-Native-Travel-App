import { useFonts } from 'expo-font'
import { Text, View } from 'react-native'
import Login from '@/components/Login'
import { auth } from '@/configs/FirebaseConfig'
import { Redirect } from 'expo-router'

export default function Index() {
  useFonts({
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    outfit: require('./../assets/fonts/Outfit-Regular.ttf'),
  })

  const user = auth.currentUser
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {user ? <Redirect href={'/myTrip'} /> : <Login />}
    </View>
  )
}
