import { WEB3AUTH_NETWORK } from '@web3auth/modal';
import { type Web3AuthContextConfig } from '@web3auth/modal/react';

const clientId = import.meta.env.WEB3AUTH_CLIENT_ID;
if (!clientId) {
  throw new Error(
    'WEB3AUTH_CLIENT_ID is not defined. Please set it in your .env file.',
  );
}

const web3AuthContextConfig: Web3AuthContextConfig = {
  web3AuthOptions: {
    clientId,
    web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
  },
};

export default web3AuthContextConfig;
