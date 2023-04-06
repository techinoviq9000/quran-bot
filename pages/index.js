import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  // send question to api http://icemelt7.pythonanywhere.com/gpt as post request with query as body
  // get answer from api
  // set answer to state
  // display answer
  const askQuestion = async () => {
    // get query from input
    const query = document.querySelector('input[name="query"]').value;
    setLoading(true)
    const response = await fetch('/api/hello', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    setAnswer(data.answer)
    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>Quran Bot</title>
        <meta name="description" content="Quran bot by Mustafa Hanif" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div style={{ margin: 42, maxWidth: 420 }}>
          <p>
            Ask the holy Quran any question
          </p>
          <div>
            <input type="text" name="query" placeholder="Ask a question" />
          </div>
          <div>
            <button onClick={askQuestion}>Ask</button>
          </div>
          <div>
            <p>Answer</p>
            {loading ? <p>Loading</p> : <p>{answer}</p>}
          </div>
        </div>

        
        
      </main>
    </>
  )
}
