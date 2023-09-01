import { Dropdown, DropdownTrigger, DropdownItem, DropdownMenu } from '@nextui-org/react';
import { useWeb3React } from '@web3-react/core';
import Link from 'next/link';
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
    <Dropdown>
      <DropdownTrigger>
        <button type="button" className="connectWallet">
          {account.substring(0, 6)}...{account.substring(account.length - 4)}
        </button>
      </DropdownTrigger>
      <DropdownMenu className="dropdown" aria-label="Static Actions">
        <DropdownItem className="dropdown__dashboard" key="Dashboard">
          <Link href="/dashboard/user">User Dashboard</Link>
        </DropdownItem>
        <DropdownItem className="dropdown__disconnect" key="disconnect" onClick={requestDisconnect}>
          Disconnect Wallet
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ) : (
    <button type="button" className="connectWallet" onClick={requestConnect}>
      Connect Wallet
    </button>
  );
}
