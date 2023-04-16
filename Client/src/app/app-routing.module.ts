import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
// import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { AddGemComponent } from './Admin/add-gem/add-gem.component';
import { AddGiftComponent } from './Admin/add-gift/add-gift.component';
import { ManagerGemComponent } from './Admin/manager-gem/manager-gem.component';
import { ManagerProductComponent } from './Admin/manager-product/manager-product.component';
import { ManagerGiftComponent } from './Admin/manager-gift/manager-gift.component';
import { ManagerBrandComponent } from './Admin/manager-brand/manager-brand.component';
import { ManagerRevenueComponent } from './Admin/manager-revenue/manager-revenue.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';

import { IndexComponent } from './User/index/index.component';
import { ProductComponent } from './User/product/product.component';
import { IntroComponent } from './User/intro/intro.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/home', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'addproduct', component: AddProductComponent },
      { path: 'AddGem', component: AddGemComponent },
      { path: 'AddGift', component: AddGiftComponent },
      { path: 'ManagerGem', component: ManagerGemComponent },
      { path: 'ManagerProduct', component: ManagerProductComponent },
      { path: 'ManagerGift', component: ManagerGiftComponent },
      { path: 'ManagerBrand', component: ManagerBrandComponent },
      { path: 'ManagerRevenue', component: ManagerRevenueComponent },
      
      { path: 'Dashboard', component: DashboardComponent }
    ]
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      { path: 'home', component: IndexComponent },
      { path: 'product', component: ProductComponent },
      { path: 'intro', component: IntroComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
