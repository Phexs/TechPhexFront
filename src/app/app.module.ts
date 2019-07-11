import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { EmployeeComponent } from './employee/employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material/material.module';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { PostUsersComponent } from './post-users/post-users.component';
import { MysqlService } from '../app/mysql.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ClientComponent,
    ConsultantComponent,
    EmployeeComponent,
    RegisterComponent,
    PageNotFoundComponent,
    LoginComponent,
    GetUsersComponent,
    PostUsersComponent,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    MysqlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
