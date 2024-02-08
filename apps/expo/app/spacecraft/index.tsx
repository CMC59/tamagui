import { StarshipFeedScreen } from 'app/features/spacecraft/detail-screen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router'

const queryClient = new QueryClient();


export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'StarshipScreen',
        }}
      />
      <QueryClientProvider client={queryClient}>
    <StarshipFeedScreen/>
  </QueryClientProvider>

    </>
  )
}