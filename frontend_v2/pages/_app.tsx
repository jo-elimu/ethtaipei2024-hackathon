import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { RainbowKitProvider, getDefaultWallets, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';
import {
  scroll,
  scrollSepolia,
  optimism,
  optimismSepolia,
  polygonZkEvm,
  polygonZkEvmTestnet,
  sepolia,
  linea,
  lineaTestnet
} from 'wagmi/chains';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';

const { wallets } = getDefaultWallets();
const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  wallets: [
    ...wallets,
    {
      groupName: 'Other',
      wallets: [metaMaskWallet],
    },
  ],
  chains: [
    sepolia,
    scroll,
    scrollSepolia,
    polygonZkEvm,
    polygonZkEvmTestnet,
    optimism,
    optimismSepolia,
    linea,
    lineaTestnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp
