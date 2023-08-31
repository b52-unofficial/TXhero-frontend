import Image from 'next/image';
import CountUp from 'react-countup';

import Connectwallet from '@/components/connectwallet';
import Header from '@/components/header';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="landing">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="landing__intro">
          <h3 className="landing__words">Meet your</h3>
          <h1 className="landing__hero">transaction hero</h1>
          <h3 className="landing__words">Saving the day, one transaction at a time, with epic gas fee refunds!</h3>
        </div>

        <div className="landing__intro2">
          <div className="landing__nums">
            <CountUp className="landing__num" end={28} />
            <h3 className="landing__eth">ETH</h3>
          </div>
          <div className="landing__nums">
            <CountUp className="landing__num" end={100} />
            <h3 className="landing__eth">ETH</h3>
          </div>
        </div>
        <div className="landing__int">
          <Image
            className="landing__landinghero"
            src="/images/landinghero.png"
            alt="landing illustration"
            width={1000}
            height={1000}
          />
          <div className="halo" />
        </div>

        <div className="landing__intro3">
          <h1 className="landing__words2">TXhero refunds your gas fee everyday</h1>
          <h2 className="landing__words">Just by sending your transactions through us,</h2>
          <h2 className="landing__words">earn money and save your wallet!</h2>
        </div>
        <div className="landing__intro4">
          <div className="landing__img1">
            <div className="landing__imgcontainer">
              <Image
                className="landing__wallet"
                src="/images/wallet.png"
                alt="landing illustration"
                width={320}
                height={320}
              />
              <h1 className="landing__words4">connect metamask</h1>
              <div className="white" />
            </div>
          </div>
          <div className="landing__img2">
            <div className="landing__imgcontainer">
              <Image
                className="landing__tx"
                src="/images/transaction.png"
                alt="landing illustration"
                width={320}
                height={320}
              />
              <h1 className="landing__words4">send transactions</h1>
              <div className="white" />
            </div>
          </div>
          <div className="landing__img3">
            <div className="landing__imgcontainer">
              <Image
                className="landing__refund"
                src="/images/refund.png"
                alt="landing illustration"
                width={320}
                height={320}
              />
              <h1 className="landing__words4">earn money</h1>
              <div className="white" />
            </div>
          </div>
        </div>
        <div className="landing__intro5">
          <h1 className="landing__words2">see how much you saved</h1>
          <h1 className="landing__words2">with your personal dashboard</h1>
          <Image
            className="landing__dashboard"
            src="/images/dashboard.png"
            alt="landing illustration"
            width={800}
            height={800}
          />
          <Connectwallet />
        </div>
        <div className="landing__intro6">
          <div className="landing__builderContainer">
            <h2 className="landing__builderQ">
              Are you a <br />
              Block builder?
            </h2>
            <div className="landing__builderWhite" />
            <Image
              className="landing__builder"
              src="/images/builder.png"
              alt="landing illustration"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
