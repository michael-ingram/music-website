import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageFourRoutingModule } from './page-four-routing.module';
import { PageFourComponent } from './page-four.component';

@NgModule({
  declarations: [PageFourComponent],
  imports: [CommonModule, PageFourRoutingModule]
})
export class PageFourModule {}
