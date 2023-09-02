import { useWeb3React } from '@web3-react/core';
import Image from 'next/image';
import { useCallback } from 'react';
import CountUp from 'react-countup';
import { toast } from 'react-toastify';

import BasicLayout from '@/layouts/BasicLayout';

export default function Home() {
  const { provider, chainId } = useWeb3React();

  function copyText(entryText: string) {
    navigator.clipboard.writeText(entryText);
    toast.success(`copied to clipboard!`);
  }

  const addEthereumChain = useCallback(async () => {
    if (!provider) {
      console.error(`provider not found`);
      return;
    }
    if (!chainId) {
      console.error(`chainId not found`);
      return;
    }
    const targetChainId = Number(process.env.NEXT_PUBLIC_CHAIN_ID);
    const chainHexString = `0x` + targetChainId.toString(16);
    try {
      await provider.send(`wallet_addEthereumChain`, [
        {
          chainId: chainHexString,
          chainName: process.env.NEXT_PUBLIC_NETWORK_NAME,
          rpcUrls: [process.env.NEXT_PUBLIC_RPC_URL],
          nativeCurrency: {
            name: process.env.NEXT_PUBLIC_CURRENCY_NAME,
            symbol: process.env.NEXT_PUBLIC_CURRENCY_SYMBOL,
            decimals: 18,
          },
          blockExplorerUrls: [process.env.NEXT_PUBLIC_BLOCK_EXPLORER_URL],
        },
      ]);
    } catch (addError) {
      // handle "add" error
    }
  }, [chainId, provider]);

  return (
    <BasicLayout>
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
            <h1 className="landing__numtitle">Average amount of refunds per user</h1>
            <CountUp className="landing__num" end={12} />
            <h3 className="landing__eth">ETH</h3>
          </div>
          <div className="landing__nums">
            <h1 className="landing__numtitle">ETH refunded today</h1>
            <CountUp className="landing__num" end={73} />
            <h3 className="landing__eth">ETH</h3>
          </div>
        </div>
        <div className="landing__int">
          <Image
            className="landing__landinghero"
            src="/images/landinghero.png"
            alt="landing illustration"
            width={800}
            height={800}
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
        </div>
        <div className="landing__rpc">
          <div className="landing__connectContainer">
            <h1 className="landing__rpctitle">Click to add to your client</h1>
            <h2 className="landing__rpctitle2">Tx Hero (Ethereum Goerli Testnet)</h2>
            <button className="landing__clickConnect" onClick={addEthereumChain}>
              Add to Client
            </button>
          </div>
          <div className="landing__connectContainer">
            <h1 className="landing__rpctitle">Or manually add:</h1>
            <div className="rpcInfo">
              <div className="rpcInfo__row1">Network Name</div>
              <div className="rpcInfo__col1">
                Tx Hero (Ethereum Goerli Testnet)
                <button onClick={() => copyText(`Tx Hero (Ethereum Goerli Testnet)`)}>
                  <Image className="copy" src="/images/copy.svg" alt="copy" width={15} height={15} />
                </button>
              </div>

              <div className="rpcInfo__row2">New RPC URL</div>
              <div className="rpcInfo__col2">
                https://rpc-goerli.txhero.io
                <button onClick={() => copyText(`https://rpc.txhero.io`)}>
                  <Image className="copy" src="/images/copy.svg" alt="copy" width={15} height={15} />
                </button>
              </div>
              <div className="rpcInfo__row3">Chain ID</div>
              <div className="rpcInfo__col3">
                5
                <button onClick={() => copyText(`5`)}>
                  <Image className="copy" src="/images/copy.svg" alt="copy" width={15} height={15} />
                </button>
              </div>
              <div className="rpcInfo__row4">Currency Symbol</div>
              <div className="rpcInfo__col4">
                GoerliETH
                <button onClick={() => copyText(`GoerliETH`)}>
                  <Image className="copy" src="/images/copy.svg" alt="copy" width={15} height={15} />
                </button>
              </div>
              <div className="rpcInfo__row5">Block Explorer URL</div>
              <div className="rpcInfo__col5">
                https://goerli.etherscan.io/
                <button onClick={() => copyText(`https://goerli.etherscan.io/`)}>
                  <Image className="copy" src="/images/copy.svg" alt="copy" width={15} height={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="landing__intro6">
          <div className="landing__builderContainer">
            <h2 className="landing__builderQ">
              Are you a <br />
              Block builder?
            </h2>
            <div className="landing__builderWhite" />
            <button className="builderBTN">Go to builder page</button>
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
    </BasicLayout>
  );
}
