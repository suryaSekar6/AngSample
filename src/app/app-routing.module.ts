import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './admin/groups/groups.component';
import { RolesComponent } from './admin/roles/roles.component';
import { UsersComponent } from './admin/users/users.component';
import { LoginComponent } from './common/login/login.component';
import { LogoutComponent } from './common/logout/logout.component';
import { BillingComponent } from './products/billing/billing.component';
import { CategoryComponent } from './products/category/category.component';
import { HomeComponent } from './products/home/home.component';
import { FormComponent } from './form/form.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent},
  {path: 'roles', component: RolesComponent},
  {path: 'groups', component: GroupsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'bill', component: BillingComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'form', component: FormComponent},
  {path: 'payment', component: PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
