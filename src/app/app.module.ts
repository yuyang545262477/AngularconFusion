import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import 'hammerjs';

import {AppRoutingModule} from './app-routing/app-routing.module';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {DishdetailComponent} from './dishdetail/dishdetail.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';

import {DishService} from './services/dish.service';
import {PromotionService} from './services/promotion.service';
import {LeaderService} from './services/leader.service';
import {LoginComponent} from './login/login.component';
import {HttpModule} from '@angular/http';
import {baseURL} from './shared/baseurl';
import {ProcessHttpMsgService} from './services/process-http-msg.service';
import {RestangularModule} from 'ngx-restangular';
import {RestangularConfigFactory} from './shared/restConfig';

// noinspection JSDeprecatedSymbols
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [DishService,
    PromotionService,
    LeaderService,
    ProcessHttpMsgService,
    {provide: 'BaseURL', useValue: baseURL}],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
