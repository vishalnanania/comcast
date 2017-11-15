import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOneComponent} from './list-one/list-one.component';
import { ListTwoComponent} from './list-two/list-two.component';

const appRoutes: Routes = [
  {path:'', redirectTo: '/list-one', pathMatch: 'full'},
  {path:'list-one', component: ListOneComponent},
  {path:'list-two', component: ListTwoComponent},
  {path:'**', redirectTo: 'list-one'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
