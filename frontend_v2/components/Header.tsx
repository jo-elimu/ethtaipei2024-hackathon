import Head from "next/head"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

export default function Header() {
  console.log('Header')
  return (
    <>
      <Head>
        <title>Radical DAO Transparency 🐸</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"></link>
      </Head>
      <header className="flex items-center justify-center w-full h-22 border-b-2 border-green-300 mb-10 p-4">
        <ConnectButton />
      </header>
    </>
  )
}
