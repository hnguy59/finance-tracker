import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from 'utils/reducers/store'
import LayoutWrapper from 'components/Layout'
import '../utils/styles/global.css'
import { ThemeProvider } from 'components/Theme/ThemeProvider'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Head>
          <title>Henry Nguyen</title>
        </Head>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </Provider>
  )
}
