import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { RainbowKitProvider, getDefaultWallets, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';
import {
  scrollSepolia,
  optimismSepolia,
  polygonZkEvmTestnet,
  lineaTestnet,
} from 'wagmi/chains';

import { defineChain } from 'viem'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';

export const thunderTest = defineChain({
  id: 18,
  name: 'ThunderCore Testnet',
  nativeCurrency: { name: 'ThunderCore Testnet Token', symbol: 'TST', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://testnet-rpc.thundercore.com'] },
  },
  blockExplorers: {
    default: { name: 'thundercore-blockscout-testnet', url: 'https://explorer-testnet.thundercore.com' },
  },
  contracts: {},
})

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
    scrollSepolia,
    polygonZkEvmTestnet,
    optimismSepolia,
    lineaTestnet,
    thunderTest,
  ],
  ssr: true,
});
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider initialChain={optimismSepolia}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp
