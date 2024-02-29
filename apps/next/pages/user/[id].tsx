import { StarshipFeedScreen } from 'app/features/spacecraft/detail-screen'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

export default function Page() {
  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <QueryClientProvider client={queryClient}>
    <StarshipFeedScreen/>
  </QueryClientProvider>
    </>
  )
}
