import '~/utils/css/tailwind.css'
import '~/utils/css/twemoji.css'
import 'react-toastify/dist/ReactToastify.css'

import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { store } from '~/utils/reducers/store'
import LayoutWrapper from '~/components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <title>Henry Nguyen</title>
        </Head>
        <LayoutWrapper>
          <>
            <Component {...pageProps} />
            <ToastContainer />
          </>
        </LayoutWrapper>
      </ThemeProvider>
    </Provider>
  )
}
