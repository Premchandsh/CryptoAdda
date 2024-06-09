import React from 'react'
import './BlogTab.css'
import Blog from '../Blog/Blog'

function BlogTab() {
  return (
    <div className='BlogTab'>
        <h1>Latest Articles</h1>
        <div className='blog-tab-container'>


            <Blog 
            imgSrc={"https://assets.coingecko.com/coingecko/public/ckeditor_assets/pictures/9846/content_What_is_Data_Availability_crypto.webp"} 
            blogTitle={"What Is Data Availability in Blockchains?"} 
            blogCategory={"Guides"}
            blogDesc={"Data availability on the blockchain ensures that all participants have the transaction data needed to verify blocks, even with resource limitations and scalability needs. Without it, independent verification crumbles, compromising the entire system."}
            writerName={"Joel Agbo"}
            date={"June 5 2024"}
            />

            <Blog 
            imgSrc={"https://assets.coingecko.com/coingecko/public/ckeditor_assets/pictures/9691/content_What_Is_Kamino_Crypto.webp"} 
            blogTitle={"What Is Kamino Finance? A Concentrated Liquidity Layer on Solana"} 
            blogCategory={"Guides"}
            blogDesc={"Kamino Finance is a Solana-based concentrated liquidity management tool that integrates lending, liquidity, and leverage into a unified DeFi product suite. This allows users to borrow and lend assets, provide leveraged liquidity, build automated liquidity strategies, and use concentrated liquidity positions as collateral."}
            writerName={"Prem chand"}
            date={"June 2 2024"}
            />

            <Blog 
            imgSrc={"https://assets.coingecko.com/coingecko/public/ckeditor_assets/pictures/8559/content_Airdrop_Scams.webp"} 
            blogTitle={"Airdrop Scams in Crypto and How to Avoid Them"} 
            blogCategory={"Guides"}
            blogDesc={"Airdrop scams are phishing attacks using fake websites, emails, and social media accounts to trick users into claiming a fake airdrop. This usually entails convincing users into connecting their wallets to malicious smart contracts or sharing their private keys in order to claim the 'airdrop', after which the wallet is drained of all its holdings."}
            writerName={"Julee K"}
            date={"May 25 2024"}
            />

            <Blog 
            imgSrc={"https://assets.coingecko.com/coingecko/public/ckeditor_assets/pictures/9979/content_Renzo_Airdrop.webp"} 
            blogTitle={"Guide on Earning Renzo Points: Potential Renzo Protocol Airdrop"} 
            blogCategory={"Airdrops"}
            blogDesc={"Users can earn Renzo Points by depositing ETH and holding ezETH, referring other users, and interacting with participating protocols including Pendle, Ionic, and Thruster."}
            writerName={"Stephanie Goh"}
            date={"April 16 2024"}
            />

            <Blog 
            imgSrc={"https://assets.coingecko.com/coingecko/public/ckeditor_assets/pictures/10276/content_MemeFi.webp"} 
            blogTitle={"What Is MemeFi?"} 
            blogCategory={"Sponsored Content"}
            blogDesc={"MemeFi is a meme-based gaming app that introduces tokenized divisible character ownership enhanced with ERC-404 functionality.It features gaming character tokenization through keys, other in-game NFT items, and a multi-token economy that makes up the core gameplay and general project management."}
            writerName={"Vera Lim"}
            date={"May 23 2024"}
            />

            <Blog 
            imgSrc={"https://assets.coingecko.com/coingecko/public/ckeditor_assets/pictures/10124/content_What_is_degen_token_crypto.webp"} 
            blogTitle={"Degen Chain and DEGEN Overview: The Community-Driven Layer 3"} 
            blogCategory={"Coins & Tokens"}
            blogDesc={"Degen Chain is a Layer 3 blockchain built with Arbitrum Orbit dedicated to the Degen community on Warpcast. Degen Chain is built around the DEGEN token, which was previously airdropped to the Degen community on Warpcast and is used for gas fees on the Degen Chain."}
            writerName={"Sankrit K"}
            date={"May 02 2024"}
            />

            <Blog 
            imgSrc={"https://assets.coingecko.com/coingecko/public/ckeditor_assets/pictures/9335/content_WHAT_IS_Liquity_LQTY_LUSD_Chicken_Bonds.webp"} 
            blogTitle={"Liquity Deep Dive: What is LQTY and What Are Chicken Bonds?"} 
            blogCategory={"Coins & Tokens"}
            blogDesc={"Liquity Protocol is a decentralized finance platform that allows users to borrow against their ETH holdings to generate a dollar-pegged stablecoin, LUSD. This stablecoin can then be utilized within the DeFi ecosystem or even can be used to cover everyday expenses."}
            writerName={"Hans Be"}
            date={"February 07 2024"}
            />

            <Blog 
            imgSrc={"https://assets.coingecko.com/coingecko/public/ckeditor_assets/pictures/8108/content_How_to_Use_MetaMask_Snaps.webp"} 
            blogTitle={"What Are MetaMask Snaps and How to Use Them"} 
            blogCategory={"Wallets & Bridges"}
            blogDesc={"MetaMask Snaps can be installed directly into your MetaMask wallet from the MetaMask Snaps Directory, and these Snaps can enable cross-chain interoperability and improve wallet security through transaction insights."}
            writerName={"Joel Agbo"}
            date={"April 22 2024"}
            />

            <Blog 
            imgSrc={"https://assets.coingecko.com/coingecko/public/ckeditor_assets/pictures/8686/content_Nigeria_Exchanges.webp"} 
            blogTitle={"8 Best Crypto Exchanges in Nigeria"} 
            blogCategory={"Reviews"}
            blogDesc={"Nigeria is one of the biggest cryptocurrency hubs in Africa, and the country is first worldwide in P2P crypto traading volume. Here is a list of eight of the best exchanges you can use in Nigeria based on the number of users, and sorted by monthly visits based on Similarweb data: Binance, NairaEx, Quidax, Luno, Bybit, Kucoin, OKX and ByBarter."}
            writerName={"Joel Agbo"}
            date={"November 30 2023"}
            />

        </div>
    </div>
  )
}

export default BlogTab