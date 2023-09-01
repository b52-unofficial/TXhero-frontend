import Link from 'next/link';
import { PropsWithChildren } from 'react';

import ConnectWalletButton from '@/components/ConnectWalletButton';

function Header() {
  return (
    <nav className="header">
      <div className="header__logo">
        <Link href="/"> TXhero</Link>
      </div>

      <div className="header__connectwallet">
        <ConnectWalletButton />
      </div>
    </nav>
  );
}

export default function BasicLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
