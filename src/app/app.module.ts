import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './common/login/login.component';
import { LogoutComponent } from './common/logout/logout.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './products/home/home.component';
import { CategoryComponent } from './products/category/category.component';
import { BillingComponent } from './products/billing/billing.component';
import { GroupsComponent } from './admin/groups/groups.component';
import { RolesComponent } from './admin/roles/roles.component';
import { UsersComponent } from './admin/users/users.component';
import { FormComponent } from './form/form.component';
import { PaymentComponent } from './payment/payment.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { NewaccComponent } from './newacc/newacc.component';
import { CartComponent } from './cart/cart.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    BillingComponent,
    GroupsComponent,
    RolesComponent,
    UsersComponent,
    FormComponent,
    PaymentComponent,
    ForgetpassComponent,
    NewaccComponent,
    CartComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HeaderComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
