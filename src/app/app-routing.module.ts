import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ClientComponent } from './client/client.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'client', component: ClientComponent},
  {path: 'consultant', component: ConsultantComponent},
  {path: 'employee', component: EmployeeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [RegisterComponent,
    ClientComponent,
    ConsultantComponent,
    EmployeeComponent];