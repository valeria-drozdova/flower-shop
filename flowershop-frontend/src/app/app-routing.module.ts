import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ItemComponent } from './components/item/item.component';


const routes: Routes = [

	{ path: 'login', component: LoginComponent},
  {path:'item/:id', component:ItemComponent},
  {path:'**', component: HomePageComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
