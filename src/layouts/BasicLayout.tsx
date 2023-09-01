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

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <Link href="/">TXhero</Link>
      </div>
      <div className="footer__line">Saving the day, one transaction at a time</div>
      <div className="footer__info">
        <div className="footer__logos">twitter</div>
        <div className="footer__logos">twitter</div>
        <div className="footer__logos">twitter</div>
      </div>
    </div>
  );
}

export default function BasicLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
