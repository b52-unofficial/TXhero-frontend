# TX Hero Frontend


### Background and Problem Statement
When PBS (Proposer-builder Separation) settles down, builders will solidify their profit centralization using Exclusive Order Flow (EOF). The issue of builder profit centralization has evolved into a form that’s incongruent with Ethereum's core value of decentralization, concerning issues such as censorship resistance and collusion.
### Goals
* Solve the EOF problem stated above and build a more censorship-resistant network. <br>
* Transform Exclusive Order Flow into a transparent, trustless auction. <br>
* Share transaction values with the end user, who is the transaction owner. <br>

### Target Market and Audience

TX Hero targets general transactions and shares the builder's profit with transaction owners. The market can be divide into four: (1) no MEV / no profit share, (2) MEV / no profit share, (3) MEV / profit share, and (4) no MEV / profit share. (1) applies to the public mempool that exists today. (2) indicates the MEV protection methods like MEV-minimization. (3) is MEV-share by Flashbots, who share the MEV profits with users and searchers. We aim to target (4), where we protect users from harmful MEVs and share profits with the users.


## Prerequisite

- VScode (with `ESlint`, `PostCSS Language Support` plugin installed)
- Node.js `v16+`
- Yarn classic `v1.22+`

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.page.tsx`. The page auto-updates as you edit the file.

## Page Component

The extension for every page components should be `*.page.tsx`.

If not, they won't be regarded as a page.
