import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home.component').then((m) => m.HomeComponent),
    title: 'The Magic Bottle — Franchise',
  },
  {
    path: 'franchise',
    loadComponent: () => import('./pages/franchise.component').then((m) => m.FranchiseComponent),
    title: 'How it works — The Magic Bottle',
  },
  {
    path: 'stories',
    loadComponent: () => import('./pages/stories.component').then((m) => m.StoriesComponent),
    title: 'Owner stories — The Magic Bottle',
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about.component').then((m) => m.AboutComponent),
    title: 'Why The Magic Bottle',
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact.component').then((m) => m.ContactComponent),
    title: 'Get started — The Magic Bottle',
  },
  { path: '**', redirectTo: '' },
];
