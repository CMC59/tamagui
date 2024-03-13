import MotorcycleScreen from 'app/features/motorcycle/motorcycle-screen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router'

const queryClient = new QueryClient();


export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'MotorcycleScreen',
        }}
      />
      <QueryClientProvider client={queryClient}>
    <MotorcycleScreen/>
  </QueryClientProvider>

    </>
  )
}