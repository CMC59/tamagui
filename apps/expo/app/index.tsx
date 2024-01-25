import { LoginScreen } from 'app/features/login/screen'
import { Stack } from 'expo-router'
import { StarshipFeedScreen } from 'app/features/spacecraft/detail-screen';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();
export default function Screen() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <StarshipFeedScreen/>
    {/* <LoginScreen/> */}
    </QueryClientProvider>
    </>
  )
}

