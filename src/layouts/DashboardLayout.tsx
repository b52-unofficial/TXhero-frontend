import Link from 'next/link';
import { PropsWithChildren } from 'react';

import ConnectWalletButton from '@/components/ConnectWalletButton';

function Header() {
  return (
    <nav className="header">
      <div className="header__logo">
        <Link href="/"> TXhero</Link>
      </div>
      <div className="header__howtouse">How to use</div>
      <div className="header__FAQ">FAQ</div>
      <div className="header__builder">Block builder?</div>
      <div className="header__connectwallet">
        <ConnectWalletButton />
      </div>
    </nav>
  );
}

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
