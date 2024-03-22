import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
export default function Header() {
  console.log('Header')
  return (
    <>
      <header className="flex items-center justify-end w-full h-22 border mb-10 p-8">
        <ConnectButton />
      </header>
    </>
  )
}
