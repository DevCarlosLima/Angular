import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
import { BookRoutes } from './book.routes';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [fromComponents.COMPONENTS],
  imports: [
    CommonModule,
    BookRoutes,
    MatButtonModule
  ]
})
export class BookModule { }
