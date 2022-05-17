import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './pages/cart/cart-page/cart-page.component';
import { HomeViewComponent } from './pages/home/components/home-view/home-view.component';
import { LoginViewComponent } from './pages/login/login-view/login-view.component';
import { RegisterPageComponent } from './pages/login/register-page/register-page.component';
import { NewsletterViewComponent } from './pages/newsletter/components/newsletter-view/newsletter-view.component';
import { ItemViewComponent } from './pages/shop/components/item-view/item-view.component';
import { ShopViewComponent } from './pages/shop/components/shop-view/shop-view.component';
import { IsLoggedInGuard } from './shared/guards/is-logged-in.guard';

const routes: Routes = [
    {
        path: 'home',
        component: HomeViewComponent
    },
    {
        path: 'shop',
        component: ShopViewComponent
    },
    {
        path: 'newsletter',
        component: NewsletterViewComponent
    },
    {
        path: 'login',
        component: LoginViewComponent
    },
    {
        path: 'shop/:id',
        component: ItemViewComponent
    },
    {
        path: 'cart',
        canActivate: [IsLoggedInGuard],
        component: CartPageComponent
    },
    {
        path: 'register',
        component: RegisterPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
