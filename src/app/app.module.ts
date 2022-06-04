import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './pages/login/login-view/login-view.component';
import { NewsletterViewComponent } from './pages/newsletter/components/newsletter-view/newsletter-view.component';
import { FilterViewComponent } from './pages/shop/components/filter-view/filter-view.component';
import { ShopSidenavComponent } from './pages/shop/components/shop-sidenav/shop-sidenav.component';
import { ShopViewComponent } from './pages/shop/components/shop-view/shop-view.component';
import { ItemCardComponent } from './shared/components/item-card/item-card.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { ItemViewComponent } from './pages/shop/components/item-view/item-view.component';
import { CartPageComponent } from './pages/cart/cart-page/cart-page.component';
import { CartItemComponent } from './pages/cart/cart-item/cart-item.component';
import { RatingStarsComponent } from './pages/shop/components/rating-stars/rating-stars.component';
import { RegisterPageComponent } from './pages/login/register-page/register-page.component';
import { IsLoggedInGuard } from './shared/guards/is-logged-in.guard';
import { ItemTypeDescriptionComponent } from './pages/shop/components/item-type-description/item-type-description.component';
import { CardPaymentComponent } from './pages/cart/card-payment/card-payment.component';
import { NgPaymentCardModule } from 'ng-payment-card';
import { ProfileViewComponent } from './pages/profile/profile-view/profile-view.component';
import { AccountInfoContentComponent } from './pages/profile/account-info-content/account-info-content.component';
@NgModule({
    declarations: [
        AppComponent,
        ShopViewComponent,
        NavbarComponent,
        NewsletterViewComponent,
        ShopSidenavComponent,
        ItemCardComponent,
        LoginViewComponent,
        FilterViewComponent,
        ItemViewComponent,
        CartPageComponent,
        CartItemComponent,
        RatingStarsComponent,
        RegisterPageComponent,
        ItemTypeDescriptionComponent,
        CardPaymentComponent,
        ProfileViewComponent,
        AccountInfoContentComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, HttpClientModule, NgPaymentCardModule],
    providers: [IsLoggedInGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
