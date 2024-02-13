import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('../app/core/home/home.routes').then((m) => m.homeRoutes),
  },
];
