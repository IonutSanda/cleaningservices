import { offersRoutes } from './core/offers/offers.routes';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('../app/core/home/home.routes').then((m) => m.homeRoutes),
  },
  {
    path: 'offers',
    loadChildren: () =>
      import('../app/core/offers/offers.routes').then((m) => m.offersRoutes),
  },
  {
    path: 'equipment',
    loadChildren: () =>
      import('../app/core/equipment/equipment.routes').then(
        (m) => m.equipmentRoutes
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('../app/core/about/about.routes').then((m) => m.aboutRoutes),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('../app/core/contact/contact.routes').then((m) => m.contactRoutes),
  },
  {
    path: 'offer',
    loadChildren: () =>
      import('../app/core/offers/offers.routes').then((m) => m.offersRoutes),
  },
];
