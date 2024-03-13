import  MotorcycleScreen  from 'app/features/motorcycle/motorcycle-screen'
import Head from 'next/head'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();


export default function Page() {
  return (
    <>
      <Head>
        <title>Emoji</title>
      </Head>
      <QueryClientProvider client={queryClient}>
    <MotorcycleScreen/>
  </QueryClientProvider>

    </>
  )
}
