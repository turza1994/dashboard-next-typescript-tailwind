import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'
import { ContextProvider } from '../contexts/ContextProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  )
}

export default MyApp
