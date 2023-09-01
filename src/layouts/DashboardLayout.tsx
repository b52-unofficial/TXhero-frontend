import Link from 'next/link';
import { PropsWithChildren } from 'react';

import ConnectWalletButton from '@/components/ConnectWalletButton';

interface HeaderProps {
  title: string;
}
function Header({ title }: HeaderProps) {
  return (
    <nav className="header">
      <div className="header__logo">
        <Link href="/"> TXhero</Link>
      </div>
      <div className="header__FAQ">{title}</div>
      <div className="header__connectwallet">
        <ConnectWalletButton />
      </div>
    </nav>
  );
}

export default function DashboardLayout({ children, title }: PropsWithChildren & HeaderProps) {
  return (
    <main className="min-h-screen flex flex-col">
      <Header title={title} />
      {children}
    </main>
  );
}
