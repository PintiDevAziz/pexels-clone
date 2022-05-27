import '../styles/globals.css'
import { AppProps } from 'next/app'
import Header from '../components/Header'
import { useState } from 'react'
function MyApp({ Component, pageProps }) {
  const [query, setQuery] = useState('all')
  const [input, setInput] = useState('')

  return (
    <>
      <Header
        query={query}
        setQuery={setQuery}
        input={input}
        setInput={setInput}
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
