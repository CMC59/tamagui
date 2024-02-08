import { LoginScreen } from 'app/features/login/screen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StarshipFeedScreen } from 'app/features/spacecraft/detail-screen'
import Head from 'next/head'

const queryClient = new QueryClient();
const App = () => {
  return (
  <QueryClientProvider client={queryClient}>
    {/* <StarshipFeedScreen/> */}
    <LoginScreen/>
  </QueryClientProvider>

  );
};

// always export default App otherwise Expo is not happy
export default App;