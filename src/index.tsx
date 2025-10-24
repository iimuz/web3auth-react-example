import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Web3AuthProvider } from '@web3auth/modal/react';
import web3AuthContextConfig from './web3authContext';
import { WagmiProvider } from '@web3auth/modal/react/wagmi';

import './index.css';

import App from './App';

const queryClient = new QueryClient();

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Web3AuthProvider config={web3AuthContextConfig}>
        <QueryClientProvider client={queryClient}>
          <WagmiProvider>
            <App />
          </WagmiProvider>
        </QueryClientProvider>
      </Web3AuthProvider>
    </React.StrictMode>,
  );
}
