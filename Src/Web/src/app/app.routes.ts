import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'livro',
    pathMatch: 'full'
  },
  {
    path: 'livro',
    loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  },
  {
    path: '**',
    redirectTo: 'livro'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }
