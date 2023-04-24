import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
// import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { AddGemComponent } from './Admin/add-gem/add-gem.component';
import { AddGiftComponent } from './Admin/add-gift/add-gift.component';
import { AddBrandComponent } from './Admin/add-brand/add-brand.component';
import { AddDiscountComponent } from './Admin/add-discount/add-discount.component';
import { AddNewsComponent } from './Admin/add-news/add-news.component';
import { ManagerGemComponent } from './Admin/manager-gem/manager-gem.component';
import { ManagerProductComponent } from './Admin/manager-product/manager-product.component';
import { ManagerGiftComponent } from './Admin/manager-gift/manager-gift.component';
import { ManagerBrandComponent } from './Admin/manager-brand/manager-brand.component';
import { ManagerRevenueComponent } from './Admin/manager-revenue/manager-revenue.component';
import { ManagerNewsComponent } from './Admin/manager-news/manager-news.component';
import { ManagerDiscountComponent } from './Admin/manager-discount/manager-discount.component';

import { ProductDetailComponent } from './Admin/product-detail/product-detail.component';

import { DashboardComponent } from './Admin/dashboard/dashboard.component';

import { IndexComponent } from './User/index/index.component';
import { ProductComponent } from './User/product/product.component';
import { IntroComponent } from './User/intro/intro.component';
import { NewsComponent } from './User/news/news.component';
import { OderHistoryComponent } from './User/oder-history/oder-history.component';
import { CustomOderPageComponent } from './User/custom-oder-page/custom-oder-page.component';
import { CartPageComponent } from './User/cart-page/cart-page.component';
import { ShowProductComponent } from './User/show-product/show-product.component';
import { ShowBranchComponent } from './User/show-branch/show-branch.component';
import { ShowGemstoneComponent } from './User/show-gemstone/show-gemstone.component';


const routes: Routes = [
  { path: '', redirectTo: '/user/home', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'AddProduct', component: AddProductComponent },
      { path: 'AddGem', component: AddGemComponent },
      { path: 'AddGift', component: AddGiftComponent },
      { path: 'AddBrand', component: AddBrandComponent },
      { path: 'AddDiscount', component: AddDiscountComponent },
      { path: 'AddNews', component: AddNewsComponent },
      
      { path: 'ManagerGem', component: ManagerGemComponent },
      { path: 'ManagerProduct', component: ManagerProductComponent },
      { path: 'ManagerGift', component: ManagerGiftComponent },
      { path: 'ManagerBrand', component: ManagerBrandComponent },
      { path: 'ManagerRevenue', component: ManagerRevenueComponent },
      { path: 'ManagerNews', component: ManagerNewsComponent },
      { path: 'ManagerDiscount', component: ManagerDiscountComponent },
      
      { path: 'ManagerProduct/ProductDetail/:id', component: ProductDetailComponent },
      
      
      { path: 'Dashboard', component: DashboardComponent }
    ]
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      { path: 'home', component: IndexComponent },
      { path: 'product', component: ProductComponent },
      { path: 'intro', component: IntroComponent },
      { path: 'News', component: NewsComponent },
      { path: 'OderHistory', component: OderHistoryComponent },
      { path: 'CustomOderPage', component: CustomOderPageComponent },
      { path: 'CartPage', component: CartPageComponent },
      { path: 'product/ShowProduct/:id', component: ShowProductComponent },
      { path: 'ShowBranch/:id', component: ShowBranchComponent },
      { path: 'ShowGemstone', component: ShowGemstoneComponent }
      
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
