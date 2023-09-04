import MetaMaskSDK, { SDKProvider } from '@metamask/sdk';
import React, { PropsWithChildren, useEffect } from 'react';

interface WalletValue {
  provider: SDKProvider | undefined;
  account: string | undefined;
  activate: () => Promise<void>;
  deactivate: () => Promise<void>;
}

export const WalletContext = React.createContext<WalletValue>({
  provider: undefined,
  account: undefined,
  activate: function (): Promise<void> {
    throw new Error(`Function not implemented.`);
  },
  deactivate: function (): Promise<void> {
    throw new Error(`Function not implemented.`);
  },
});

export default function WalletProvider({ children }: PropsWithChildren) {
  const [provider, setProvider] = React.useState<SDKProvider | undefined>(undefined);
  const [account, setAccount] = React.useState<string | undefined>(undefined);

  const activate = async () => {
    try {
      const accounts = await provider?.request<string[]>({
        method: `eth_requestAccounts`,
      });
      if (accounts) {
        setAccount(accounts[0]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const deactivate = async () => {
    const isConnected = provider?.isConnected();
    if (isConnected) {
      setAccount(undefined);
    }
  };

  useEffect(() => {
    const MMSDK = new MetaMaskSDK({
      extensionOnly: true,
      injectProvider: true,
      dappMetadata: {
        name: `Transaction Hero`,
      },
    });
    const ethereum = MMSDK.getProvider();
    setProvider(ethereum);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onAccountsChanged = (accounts: any) => {
      setAccount(accounts[0]);
    };
    ethereum.on(`accountsChanged`, onAccountsChanged);

    return () => {
      ethereum.removeListener(`accountsChanged`, onAccountsChanged);
      setAccount(undefined);
    };
  }, []);

  return (
    <WalletContext.Provider
      value={{
        provider: provider,
        account,
        activate,
        deactivate,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}
