# TX Hero Frontend
![image](https://github.com/b52-unofficial/TXhero-frontend/assets/77462765/8a431980-1390-43f3-a9a7-6322618bce62)

### Background and Problem Statement
When PBS (Proposer-builder Separation) settles down, builders will solidify their profit centralization using Exclusive Order Flow (EOF). The issue of builder profit centralization has evolved into a form that’s incongruent with Ethereum's core value of decentralization, concerning issues such as censorship resistance and collusion.
### Goals
* Solve the EOF problem stated above and build a more censorship-resistant network. <br>
* Transform Exclusive Order Flow into a transparent, trustless auction. <br>
* Share transaction values with the end user, who is the transaction owner. <br>

### Target Market and Audience
![image](https://github.com/b52-unofficial/TXhero-frontend/assets/77462765/27c6d71e-e780-4d78-9b55-727f73cbb8ee)
TX Hero targets general transactions and shares the builder's profit with transaction owners. The market can be divide into four: (1) no MEV / no profit share, (2) MEV / no profit share, (3) MEV / profit share, and (4) no MEV / profit share. (1) applies to the public mempool that exists today. (2) indicates the MEV protection methods like MEV-minimization. (3) is MEV-share by Flashbots, who share the MEV profits with users and searchers. We aim to target (4), where we protect users from harmful MEVs and share profits with the users.

### Architecture
![image](https://github.com/b52-unofficial/TXhero-frontend/assets/77462765/5ce820db-2d79-4ad4-a5b8-4f4071779c9c)


## Demo-landing page
<img width="1512" alt="Screenshot 2023-09-03 at 11 03 07 AM" src="https://github.com/b52-unofficial/TXhero-frontend/assets/77462765/8fb5dce3-54f9-4ef6-b2c3-75a9f292fcc6">
<img width="1512" alt="Screenshot 2023-09-03 at 11 03 13 AM" src="https://github.com/b52-unofficial/TXhero-frontend/assets/77462765/65c3c521-2549-4a09-b241-bb250c33a0a3">
<img width="1512" alt="Screenshot 2023-09-03 at 11 03 20 AM" src="https://github.com/b52-unofficial/TXhero-frontend/assets/77462765/6a5fc33e-4ded-45b0-9f98-fa9778ce8422">

## Demo-Dashboard
![1  Add RPC](https://github.com/b52-unofficial/TXhero-frontend/assets/77462765/a32b88ce-5576-47c9-8834-1fe6c3dedda9)
![2  Send TX](https://github.com/b52-unofficial/TXhero-frontend/assets/77462765/9548eaa4-fe74-4158-84aa-94fb31471b87)
![3  Dashboard](https://github.com/b52-unofficial/TXhero-frontend/assets/77462765/277556d8-a338-46e0-97ec-858a5385ea6f)
![4  Claim](https://github.com/b52-unofficial/TXhero-frontend/assets/77462765/fde1bcb0-e95c-4d64-b1ff-2b4792ae289a)

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
