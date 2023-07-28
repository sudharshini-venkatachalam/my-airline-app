import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PassengerEditComponent } from './shared/passenger/passenger-edit/passenger-edit.component';
import { PassengerComponent } from './shared/passenger/passenger.component';

const routes: Routes = [
  {path:'',redirectTo:'/passengers',pathMatch:'full'},
  {
    path:'passengers',component:PassengerComponent
  ,children:[
    {
      path:'new',component:PassengerEditComponent
  
      },
    {
      path:':id/edit',component:PassengerEditComponent
  
      }
     ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
