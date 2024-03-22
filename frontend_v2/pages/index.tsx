import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Link from 'next/link'

export default function Home() {
  console.log('Home')
  return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-green-200">
        <Head>
          <title>Radical DAO Transparency 🐸</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Radical DAO Transparency 🐸
          </h1>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <Link href={'/orgs/address'}>Frog DAO</Link>
          </div>
        </main>

        <Footer />
      </div>
  )
}