import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmoloyeelistComponent } from './emoloyeelist/emoloyeelist.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'',component:EmoloyeelistComponent},
  { path: 'add', component: AddemployeeComponent },
  { path: 'view/:id', component: ViewemployeeComponent },
  { path: 'edit/:id', component: EditemployeeComponent },
  { path: 'details/:id', component: DetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
