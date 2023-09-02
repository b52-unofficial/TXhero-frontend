import { Dropdown, DropdownTrigger, DropdownItem, DropdownMenu } from '@nextui-org/react';
import { useWeb3React } from '@web3-react/core';
import Image from 'next/image';
import Link from 'next/link';
import React, { ButtonHTMLAttributes, useCallback } from 'react';

import svgChevronDown from '../../public/icons/ChevronDown.svg';
import imgPlaceholder from '../../public/images/profile-placeholder.png';

const StyledButton = React.forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ children, className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className="px-4 py-2 font-sans font-semibold text-sm bg-primary-400 text-black rounded-[10px] shadow-sm"
      {...props}
    >
      {children}
    </button>
  ),
);
StyledButton.displayName = `StyledButton`;

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
        <StyledButton>
          <Image className="inline-block rounded-full mr-2" src={imgPlaceholder} width={22} height={22} alt="" />
          {account.substring(0, 4)}...{account.substring(account.length - 4)}
          <Image src={svgChevronDown} className="inline-block ml-2" width={8} height={8} alt="" />
        </StyledButton>
      </DropdownTrigger>
      <DropdownMenu className="dropdown" aria-label="Static Actions">
        <DropdownItem className="dropdown__dashboard" key="Dashboard">
          <Link href="/dashboard/user" className="font-sans">
            User Dashboard
          </Link>
        </DropdownItem>
        <DropdownItem className="dropdown__disconnect font-sans" key="disconnect" onClick={requestDisconnect}>
          Disconnect Wallet
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ) : (
    <StyledButton onClick={requestConnect}>Connect Wallet</StyledButton>
  );
}
