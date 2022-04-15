import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { 
    path: "", 
    pathMatch: "full", 
    component: IndexComponent
  },
  {
    path: 'login', 
    component: LoginComponent,
    data: {
      title: 'Вход',
      breadcrumb: [
        {
          label: 'Вход',
          url: '/login'
        }
      ]
    }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: {
      title: 'Регистрация',
      breadcrumb: [
        {
          label: 'Регистрация',
          url: '/signup'
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
