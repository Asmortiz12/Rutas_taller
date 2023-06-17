import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProductsComponent } from '../pages/products/products.component';
import { CategoriesComponent } from '../pages/categories/categories.component';
import { NoFoundPageComponent } from '../noFoundPage/no-found-page.component';

const routes:Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'category', component: CategoriesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NoFoundPageComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
