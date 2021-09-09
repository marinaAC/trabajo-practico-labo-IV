import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './modules/pages/error/error.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { LoginComponent } from './modules/pages/login/login.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'**', component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
