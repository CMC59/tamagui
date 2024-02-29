import { StarshipFeedScreen } from 'app/features/spacecraft/detail-screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'User',
        }}
      />
      <StarshipFeedScreen />
    </>
  )
}
