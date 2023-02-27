import { BookComponent } from './book/book.component';


import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BookStatsComponent } from './book-stats/book-stats.component';


const routes: Routes = [
  {path: 'book', component: BookComponent},
  { path: 'auth', component: LoginComponent},
  { path: 'stats', component: BookStatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BookComponent]