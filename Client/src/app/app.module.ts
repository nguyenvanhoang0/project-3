import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { FooterAdminComponent } from './layout/footer-admin/footer-admin.component';
import { HearderUserComponent } from './layout/hearder-user/hearder-user.component';
import { FooterUserComponent } from './layout/footer-user/footer-user.component';
import { IndexComponent } from './User/index/index.component';
import { HomeComponent } from './User/home/home.component';
import { IntroComponent } from './User/intro/intro.component';
import { ProductComponent } from './User/product/product.component';

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
    FooterAdminComponent,
    HearderUserComponent,
    FooterUserComponent,
    IndexComponent,
    HomeComponent,
    IntroComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
