import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { SecuredComponent } from './pages/secured/secured.component';
import { ErrorComponent } from './pages/error/error.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor, AuthModule } from '@first-line/firstline-angular';

import config from '../../config.json';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogoutComponent,
    SecuredComponent,
    NavBarComponent,
    FooterComponent,
    HomeContentComponent,
    LoadingComponent,
    ErrorComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    HighlightModule,
    AuthModule.forRoot({
      domain: config.FIRSTLINE_DOMAIN,
      audience: config.FIRSTLINE_AUDIENCE,
      client_id: config.FIRSTLINE_CLIENT_ID,
      redirect_uri: window.location.origin,
      logout_uri: `${window.location.origin}/logout`,
      httpInterceptor: {
        allowedList: config.API_INTERCEPTOR_ALLOWED_LIST
      }
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    {
      provide: Window,
      useValue: window,
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          json: () => import('highlight.js/lib/languages/json'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
