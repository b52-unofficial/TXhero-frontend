import { useWeb3React } from '@web3-react/core';
import { useCallback } from 'react';

export default function ConnectWalletButton() {
  const { connector, account, isActive } = useWeb3React();

  const requestConnect = useCallback(async () => {
    if (!isActive) {
      try {
        await connector.activate();
      } catch (e) {
        console.error(e);
      }
    } else {
      console.warn(`Already connected`);
    }
  }, [connector, isActive]);

  const requestDisconnect = useCallback(async () => {
    if (isActive) {
      try {
        if (connector?.deactivate) {
          await connector.deactivate();
        } else {
          await connector.resetState();
        }
      } catch (e) {
        console.error(e);
      }
    } else {
      console.warn(`Already disconnected`);
    }
  }, [connector, isActive]);

  return account ? (
    <button type="button" className="connectWallet" onClick={requestDisconnect}>
      {account.substring(0, 6)}...{account.substring(account.length - 4)}
    </button>
  ) : (
    <button type="button" className="connectWallet" onClick={requestConnect}>
      Connect Wallet
    </button>
  );
}
