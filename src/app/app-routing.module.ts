import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ViewComponentComponent } from './view-component/view-component.component';

const routes: Routes = [
  // {
  //   path:'' , redirectTo:'/users/admin', pathMatch:'full'
  // },
  // {
  //   path:'users/admin', component:ViewComponentComponent
  // },
  // {
  // path:'users/admin/:userId', component:ViewComponentComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }