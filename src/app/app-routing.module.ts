import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { IntroComponent } from './components/main-page/main-page.component';
import { ItemComponent } from './components/item/item.component';

const routes: Routes = [

	{ path: 'login', component: LoginComponent},
  {path:'products', component: ProductsComponent},
  {path:'item/:id', component:ItemComponent},
  {path:'**', component: IntroComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
