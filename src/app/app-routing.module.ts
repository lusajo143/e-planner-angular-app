import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
<<<<<<< HEAD

const routes: Routes = [
  {
    component: SigninComponent,
=======
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    component: LandingComponent,
>>>>>>> d6dad94b8a86bfd4035dc438bb67a4c7fe1df5a2
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
