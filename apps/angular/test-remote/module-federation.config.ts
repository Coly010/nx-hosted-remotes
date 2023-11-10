import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'test-remote',
  exposes: {
    './Routes': 'apps/angular/test-remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
