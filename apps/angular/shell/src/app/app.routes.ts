import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'test-remote',
    loadChildren: () => import('test-remote/Routes').then(m => m.remoteRoutes)
  }
];
