import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  console.log('Home')

  const optimismDeployment = require('../../smart-contracts/deployments/optimism-sepolia.json')
  const orgAddress = optimismDeployment.dao_contract
  console.log('orgAddress:', orgAddress)

  return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-green-200">
        <Header />

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Radical DAO Transparency 🐸
          </h1>

          <Link href={`/orgs/${orgAddress}`} className="mt-8 rounded-2xl shadow-2xl">
            <Image alt='Frog DAO' src={'/transparent.png'} width={400} height={400} className='rounded-t-2xl' />
            <div className='bg-white rounded-b-2xl p-4 text-4xl'>
              Hacker DAO
            </div>
          </Link>

          <Link href={`/orgs/${orgAddress}`} className="mt-8 rounded-2xl shadow-2xl">
            <Image alt='Frog DAO' src={'/transparent.png'} width={400} height={400} className='rounded-t-2xl' />
            <div className='bg-white rounded-b-2xl p-4 text-4xl'>
              Cracker DAO
            </div>
          </Link>

          <Link href={`/orgs/${orgAddress}`} className="mt-8 rounded-2xl shadow-2xl">
            <Image alt='Frog DAO' src={'/transparent.png'} width={400} height={400} className='rounded-t-2xl' />
            <div className='bg-white rounded-b-2xl p-4 text-4xl'>
              Snacker DAO
            </div>
          </Link>
        </main>

        <Footer />
      </div>
  )
}