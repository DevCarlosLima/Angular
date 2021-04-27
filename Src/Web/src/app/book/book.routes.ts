import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { ReaderComponent } from './components/reader/reader.component';


const routes: Routes = [
    { path: '', redirectTo: 'lista' },
    { path: 'lista', component: BookComponent },
    { path: 'leitores', component: ReaderComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookRoutes { }