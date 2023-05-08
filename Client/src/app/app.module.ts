
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { AddGemComponent } from './Admin/add-gem/add-gem.component';
import { AddGiftComponent } from './Admin/add-gift/add-gift.component';
import { ManagerProductComponent } from './Admin/manager-product/manager-product.component';
import { ManagerGemComponent } from './Admin/manager-gem/manager-gem.component';
import { ManagerGiftComponent } from './Admin/manager-gift/manager-gift.component';
import { ManagerBrandComponent } from './Admin/manager-brand/manager-brand.component';
import { ManagerRevenueComponent } from './Admin/manager-revenue/manager-revenue.component';
import { HearderAdminComponent } from './layout/hearder-admin/hearder-admin.component';

import { HearderUserComponent } from './layout/hearder-user/hearder-user.component';
import { FooterUserComponent } from './layout/footer-user/footer-user.component';
import { IndexComponent } from './User/index/index.component';
import { HomeComponent } from './User/home/home.component';
import { IntroComponent } from './User/intro/intro.component';
import { ProductComponent } from './User/product/product.component';
import { MenuAdminComponent } from './layout/menu-admin/menu-admin.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { AddBrandComponent } from './Admin/add-brand/add-brand.component';
import { AddDiscountComponent } from './Admin/add-discount/add-discount.component';
import { AddNewsComponent } from './Admin/add-news/add-news.component';
import { ManagerNewsComponent } from './Admin/manager-news/manager-news.component';
import { ManagerDiscountComponent } from './Admin/manager-discount/manager-discount.component';
import { ProductDetailComponent } from './Admin/product-detail/product-detail.component';
import { NewsComponent } from './User/news/news.component';
import { CartPageComponent } from './User/cart-page/cart-page.component';
import { OderHistoryComponent } from './User/oder-history/oder-history.component';
import { CustomOderPageComponent } from './User/custom-oder-page/custom-oder-page.component';
import { ShowProductComponent } from './User/show-product/show-product.component';
import { ShowBranchComponent } from './User/show-branch/show-branch.component';
import { ShowGemstoneComponent } from './User/show-gemstone/show-gemstone.component';
import { ContactComponent } from './User/contact/contact.component';
import { UpdateProductComponent } from './Admin/update-product/update-product.component';
import { UpdateBrandComponent } from './Admin/update-brand/update-brand.component';
import { UpdateGiftComponent } from './Admin/update-gift/update-gift.component';
import { UpdateDiscountComponent } from './Admin/update-discount/update-discount.component';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { ManagerUserComponent } from './Admin/manager-user/manager-user.component';
import { UserDetailComponent } from './Admin/user-detail/user-detail.component';
import { NewsDetailComponent } from './Admin/news-detail/news-detail.component';
import { ImportProductsComponent } from './Admin/import-products/import-products.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddProductComponent,
    AddGemComponent,
    AddGiftComponent,
    ManagerProductComponent,
    ManagerGemComponent,
    ManagerGiftComponent,
    ManagerBrandComponent,
    ManagerRevenueComponent,
    HearderAdminComponent,
    HearderUserComponent,
    FooterUserComponent,
    IndexComponent,
    HomeComponent,
    IntroComponent,
    ProductComponent,
    MenuAdminComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
    AddBrandComponent,
    AddDiscountComponent,
    AddNewsComponent,
    ManagerNewsComponent,
    ManagerDiscountComponent,
    ProductDetailComponent,
    NewsComponent,
    CartPageComponent,
    OderHistoryComponent,
    CustomOderPageComponent,
    ShowProductComponent,
    ShowBranchComponent,
    ShowGemstoneComponent,
    ContactComponent,
    UpdateProductComponent,
    UpdateBrandComponent,
    UpdateGiftComponent,
    UpdateDiscountComponent,
    LoginComponent,
    SignupComponent,
    ManagerUserComponent,
    UserDetailComponent,
    NewsDetailComponent,
    ImportProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CKEditorModule,
    ReactiveFormsModule,
    NgxPaginationModule

  ],



  providers: [],
  bootstrap: [AppComponent]
})

// @NgModule({
//   imports: [
//     // CKEditorModule,
//     // FormsModule
    
//   ]
// })

export class AppModule { }
