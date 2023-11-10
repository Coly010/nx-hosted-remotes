import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shell',
  remotes: [['test-remote', 'https://nx-angular-remote.netlify.app/remoteEntry.mjs']],
};

export default config;
