import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{ headerShown: false }} //- Applies to all screens
    >
      {/* <Stack.Screen
        name="index"
        options={{ headerShown: false }} // Applies to specified screen
      /> */}
      <Stack.Screen name="(tabs)" />
    </Stack>
  )
}
