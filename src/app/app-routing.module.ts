import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabinetRunnerComponent } from './pages/cabinet-runner/cabinet-runner.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent, LOGIN_URL } from './pages/login/login.component';
import { SignupComponent, SIGNUP_URL } from './pages/signup/signup.component';

const routes: Routes = [
  { 
    path: "", 
    pathMatch: "full", 
    component: IndexComponent,
    data: {
      title: 'index',
      breadcrumb: [
        {
          label: 'Главная',
          url: '/'
        }
      ]
    }
  },
  {
    path: LOGIN_URL, 
    component: LoginComponent,
    data: {
      title: 'Вход',
      breadcrumb: [
        {
          label: 'Вход',
          url: LOGIN_URL
        }
      ]
    }
  },
  {
    path: SIGNUP_URL,
    component: SignupComponent,
    data: {
      title: 'Регистрация',
      breadcrumb: [
        {
          label: 'Регистрация',
          url: SIGNUP_URL
        }
      ]
    }
  },
  {
    path: 'cabinet',
    component: CabinetRunnerComponent,
    data: {
      title: 'Личный кабинет',
      breadcrumb: [
        {
          label: 'Личный кабинет',
          url: '/cabinet'
        }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
