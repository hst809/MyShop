import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import {  AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment.development';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavComponent } from './bs-nav/bs-nav.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { ProductFormComponent } from './product-form/product-form.component';
import { AuthGuard as AuthGuard } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService as AdminAuthGuard } from './admin-auth-guard.service';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { OrderService } from './order.service';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { OrderDetailsComponent } from './admin/order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path:'',component:ProductsComponent},
      {path:'products',component:ProductsComponent},
      {path:'shopping-cart',component:ShoppingCartComponent},
      {path:'login',component:LoginComponent},

      {path:'check-out',component:CheckOutComponent,canActivate:[AuthGuard]},
      {path:'order-success/:id',component:OrderSuccessComponent,canActivate:[AuthGuard]},
      {path:'my/orders',component:MyOrderComponent,canActivate:[AuthGuard]},

      {path:'admin/products/new',component:ProductFormComponent,canActivate:[AuthGuard,AdminAuthGuard]},
      {path:'admin/products/:id',component:ProductFormComponent,canActivate:[AuthGuard,AdminAuthGuard]},
      {path:'admin/products',component:AdminProductsComponent,canActivate:[AuthGuard,AdminAuthGuard]},
      {path:'admin/orders/:id',component:OrderDetailsComponent,canActivate:[AuthGuard,AdminAuthGuard]},
      {path:'admin/orders',component:AdminOrdersComponent,canActivate:[AuthGuard,AdminAuthGuard]},
    ]),    NgbModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
