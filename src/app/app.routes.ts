import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth.service';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'login-page',
        component: LoginPageComponent,
      },
      {
        path: 'home/register-page',
        component: RegisterPageComponent,
      },
    ],
    // component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthService],
  },
  //   {
  //     path: ''/'login-page',
  //     component: LoginPageComponent,
  //   },
  //   {
  //     path: 'login-page/register-page',
  //     component: RegisterPageComponent,
  //   },
  // path: 'login-page',
  // children: [
  //   {
  //     path: '',
  //     component: LoginPageComponent,
  //   },
  //   {
  //     path: 'register-page',
  //     component: RegisterPageComponent,
  //   },
  // ],
  //component: RegistrationComponent,
];
