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

@NgModule({
    declarations: [
        AppComponent,
        ShopViewComponent,
        NavbarComponent,
        NewsletterViewComponent,
        ShopSidenavComponent,
        ItemCardComponent,
        LoginViewComponent,
        FilterViewComponent
    ],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MaterialModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
