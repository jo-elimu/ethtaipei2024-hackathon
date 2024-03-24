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

  const scrollDeployment = require('../../smart-contracts/deployments/scroll-sepolia.json')
  const scrollAddress = scrollDeployment.dao_contract
  console.log('scrollAddress:', scrollAddress)

  const lineaDeployment = require('../../smart-contracts/deployments/linea-goerli.json')
  const lineaDAddress = lineaDeployment.dao_contract
  console.log('lineaDAddress:', lineaDAddress)

  const polygonDeployment = require('../../smart-contracts/deployments/polygon-cardona.json')
  const polygonAddress = polygonDeployment.dao_contract
  console.log('polygonAddress:', polygonAddress)

  const thunderDeployment = require('../../smart-contracts/deployments/thundercore_testnet.json')
  const thunderAddress = thunderDeployment.dao_contract
  console.log('thunderAddress:', thunderAddress)

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
              Hacker DAO - OP
            </div>
          </Link>

          <Link href={`/orgs/${scrollAddress}`} className="mt-8 rounded-2xl shadow-2xl">
            <Image alt='Frog DAO - Scroll' src={'/transparent.png'} width={400} height={400} className='rounded-t-2xl' />
            <div className='bg-white rounded-b-2xl p-4 text-4xl'>
              Hacker DAO - Scroll
            </div>
          </Link>

          <Link href={`/orgs/${polygonAddress}`} className="mt-8 rounded-2xl shadow-2xl">
            <Image alt='Frog DAO - Polygon' src={'/transparent.png'} width={400} height={400} className='rounded-t-2xl' />
            <div className='bg-white rounded-b-2xl p-4 text-4xl'>
              Hacker DAO - Polygon
            </div>
          </Link>

          <Link href={`/orgs/${lineaDAddress}`} className="mt-8 rounded-2xl shadow-2xl">
            <Image alt='Frog DAO - Linea' src={'/transparent.png'} width={400} height={400} className='rounded-t-2xl' />
            <div className='bg-white rounded-b-2xl p-4 text-4xl'>
              Hacker DAO - Linea
            </div>
          </Link>

          <Link href={`/orgs/${thunderAddress}`} className="mt-8 rounded-2xl shadow-2xl">
            <Image alt='Frog DAO - ThunderCore' src={'/transparent.png'} width={400} height={400} className='rounded-t-2xl' />
            <div className='bg-white rounded-b-2xl p-4 text-4xl'>
              Hacker DAO - ThunderCore
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