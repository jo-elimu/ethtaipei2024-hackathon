# Radical DAO Transparency

> A tool for DAOs to know what their members are really like. Similar to Ray Dalio's [Radical Transparency](https://www.youtube.com/watch?v=3kUQlAUoDPw#t=13m10s) system, but adapted to a Web3 world.

[ETHTaipei 2024 hackathon project](https://taikai.network/ethtaipei/hackathons/hackathon-2024/projects/cltxxre4v0dxrwc01dvzpubvt)

![](https://taikai.azureedge.net/nCDM8OtyC2WZ5YH-WlKvrr9k5i6XfaYOauEhsQsIS5Y/rs:fit:1920:0:0/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3RhaWthaS1zdG9yYWdlL2ltYWdlcy9hMWE3NTI1MC1lNWI2LTExZWUtYjcyZi1lZGQxNmZlNjM1MWNTY3JlZW5zaG90IDIwMjQtMDMtMTkgMTM0OTE1LnBuZw)

---

## Planned Functionalities/Features

**DApp**

- A frontend app for user to interact with
- A smart contract which stores users' rating to other users
  - A 2d array which stores rating

**Roles**

- A DAO can have multiple roles
- Any DAO member can add new roles
- A DAO member can hold multiple roles

**Role Levels**

- A DAO member's role level can be rated with a value from 1 to 10

---

## Development Process

### Hackathon Day 1

1. Idea [discussions](https://github.com/jo-elimu/ethtaipei2024-hackathon/discussions)
2. [Planning](https://github.com/jo-elimu/ethtaipei2024-hackathon/tree/main?tab=readme-ov-file#planned-functionalitiesfeatures) of functionalities/features.
3. UX/UI sketching

   <img src="https://github.com/jo-elimu/ethtaipei2024-hackathon/assets/1451036/88b2e931-f578-4284-a619-1fc2c02e15fd" width="480" />

### Hackathon Day 2

1. Code UI
2. Add Events to smart contract
3. Deploy smart contract on multiple blockchains

### Hackathon Day 3

1. Code UI
2. Documentation

---

## MVP

[![Netlify Status](https://api.netlify.com/api/v1/badges/e1e35207-0868-4b9b-8ea1-11cad4196107/deploy-status)](https://app.netlify.com/sites/radical-dao-transparency/deploys)

https://radical-dao-transparency.netlify.app

![screencast2](https://github.com/jo-elimu/ethtaipei2024-hackathon/assets/1451036/b77de0d2-33dd-4f84-b82a-5ac7acc517c2)

### Technicality

* Decentralized permissionless smart contracts deployed on Optimism Sepolia, Scroll Sepolia, Polygon Cardona, Linea Goerly, and Thundercore testnet.
* Industry standard smart contract deploy and testing tools including but not limited to hardhat and remix.
* All contracts deployed verified on block explorers across different chains.
* Latest support from rainbowKit and Wagmi.

---

### Utility

* Help newcomers with little to no knowledge of the organization quickly get a grasp of colleagues' technical skill level from different aspects.
* Due to the implementation of a DAO, each member has the ability to evaluate all other members, with the exception of themselves.

---

### Market Readiness

* **Web3 Community Demand**: With the growing popularity of cryptocurrencies and blockchain technology, there's an increasing demand for decentralized autonomous organizations (DAOs). this tool would cater to this demand by providing a transparent rating system that operates effectively within the Web3 environment.
* **Need for Information Transparency**: Within DAOs, members require transparent insights into each other's performance and reputation to facilitate better cooperation and decision-making. this tool fills this need by providing a platform for members to rate each other, thereby enhancing the overall efficiency of the DAO.
* **Technical Feasibility** : The functionalities this tool propose are technically feasible, utilizing smart contracts to store and manage user ratings, and offering a user-friendly frontend application for interaction with the smart contracts. Such a framework aligns with the standards of Web3 technology and has the potential for widespread adoption.

### Future Work

* Use Zero Knowledge Proof to hide rater's identity while ensuring the integrity of average scores, so raters would fear no more and rate with their true thoughts.
* Smart contract security audit.
* Smart contract gas usage optimization.
* There probably exists a better data strucutre to reduce the time complexity of fetching average ratings from smart contract.
* Stricter member opration restriction, like OAuth in web2.
