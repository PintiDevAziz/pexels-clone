import '../styles/globals.css'
import { AppProps } from 'next/app'
import Header from '../components/Header'
import { useState } from 'react'
import { useRouter } from 'next/router'
function MyApp({ Component, pageProps }) {
  const [query, setQuery] = useState('all')
  const [input, setInput] = useState('')
  const router = useRouter()

  return (
    <>
      <Header
        query={query}
        setQuery={setQuery}
        input={input}
        setInput={setInput}
        bg={router.asPath == '/discover' ? true : false}
      />
      <Component
        {...pageProps}
        query={query}
        setQuery={setQuery}
        input={input}
        setInput={setInput}
      />
    </>
  )
}

export default MyApp
