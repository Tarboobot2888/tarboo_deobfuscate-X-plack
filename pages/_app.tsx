// pages/_app.tsx
import '../styles/globals.css'
import '../styles/theme.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer position="bottom-right" />
    </>
  )
}
