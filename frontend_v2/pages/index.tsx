import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  console.log('Home')
  return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-green-200">
        <Header />

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Radical DAO Transparency 🐸
          </h1>

          <Link href="/orgs/0x43A30DB2d6962c37a702E869FbD15cFc4f86f621" className="hover:text-purple-600 focus:text-purple-600">
            <Image alt='Frog DAO' src={'/transparent.png'} width={400} height={400}
                className='mt-8 rounded-2xl' />
          </Link>
        </main>

        <Footer />
      </div>
  )
}