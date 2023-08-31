import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core';
import type { MetaMask } from '@web3-react/metamask';
import { PropsWithChildren } from 'react';

import { hooks as metaMaskHooks, metaMask } from '../connectors/metaMask';

const connectors: [MetaMask, Web3ReactHooks][] = [[metaMask, metaMaskHooks]];

export default function WalletProvider({ children }: PropsWithChildren) {
  return <Web3ReactProvider connectors={connectors}>{children}</Web3ReactProvider>;
}
