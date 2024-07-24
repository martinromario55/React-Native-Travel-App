import { useFonts } from 'expo-font'
import { Text, View } from 'react-native'

export default function Index() {
  useFonts({
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    outfit: require('./../assets/fonts/Outfit-Regular.ttf'),
  })
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text style={{ fontSize: 30, fontFamily: 'outfit-bold' }}>
        Hello World!
      </Text>
    </View>
  )
}
