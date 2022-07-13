---
sidebar_position: 1
description: How to get started
---

# Get Started

## Requirements

- It is recommended to be running a Debian or Ubuntu based Linux distribution. 
- In order to install the requirements for another OS, please refer to the official guides.  

1. NVM
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash && source ~/.nvm/nvm.sh
```
2. Node LTS
```sh
nvm use --lts
```
3. Yarn
```sh
npm install --global yarn
```

### Install all dependencies:

```sh
yarn install
```

### Create a Moralis Testnet Server

1. Go to Moralis and create a testnet server with the following test chains: Eth (Kovan), Polygon (Mumbai), BSC (Testnet), Avax (Testnet)

2. Set Environment variables <br></br>
2.1 Click View Details for your newly created instance <br></br>
2.2 Copy and save both "Server URL" and "Application ID" <br></br>
2.3 Export environment variables <br></br>
```sh
export REACT_APP_MORALIS_SERVER_URL=[Insert your Server URL] && export REACT_APP_MORALIS_APPLICATION_ID=[Insert your Application ID]
```
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; or <br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.4 Create a .env file <br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.5 Edit the .env file <br></br>
```shell
REACT_APP_MORALIS_SERVER_URL=[Insert your Server URL]
REACT_APP_MORALIS_APPLICATION_ID=[Insert your Application ID]
```

## Run App

```sh
yarn start
```

or

## Build App

```sh
yarn build
```

## Docker

We recommend developing with Docker. This ensures you're development environment is isolated from the rest of your machine. Refer to the official documentation to install Docker. ([Docs](https://docs.docker.com/desktop/linux/install/))

```sh
docker-compose -f docker-compose-dev.yml up --build
```