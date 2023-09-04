import React from 'react';

import { WalletContext } from '@/components/WalletProvider';

export default function useMetamask() {
  const context = React.useContext(WalletContext);

  return context;
}
