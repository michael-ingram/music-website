import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'page-three',
    loadChildren: () =>
      import('./page-three/page-three.module').then(m => m.PageThreeModule)
  },
  {
    path: 'page-two',
    loadChildren: () => import('./page-two/page-two.module').then(m => m.PageTwoModule)
  },
  {
    path: 'page-four',
    loadChildren: () =>
      import('./page-four/page-four.module').then(
        m => m.PageFourModule
      )
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then(m => m.ContactModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
