import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageFourComponent } from './page-four.component';

const routes: Routes = [{ path: '', component: PageFourComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageFourRoutingModule {}
