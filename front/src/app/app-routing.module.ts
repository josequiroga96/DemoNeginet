import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeopleListComponent} from "./pages/people/people-list/people-list.component";

const routes: Routes = [
  { path: 'peoples', component: PeopleListComponent},
  { path: '', redirectTo: 'peoples', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
