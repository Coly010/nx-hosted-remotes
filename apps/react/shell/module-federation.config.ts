import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'react-shell',
  remotes: [['test-react-remote', 'https://nx-react-remote.netlify.app/remoteEntry.js']],
};

export default config;
