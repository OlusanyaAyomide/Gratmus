import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '@/store/store'
import {Provider} from "react-redux"
import { AnimatePresence } from 'framer-motion'
import Router, { useRouter } from 'next/router'
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return ( <Provider store={store}>
    <AnimatePresence>
      <Component {...pageProps} key={router.asPath}/>
    </AnimatePresence>

</Provider>
) 
}
