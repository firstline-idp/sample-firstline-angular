import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SecuredComponent } from './pages/secured/secured.component';
import { ErrorComponent } from './pages/error/error.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { AuthGuard } from '@first-line/firstline-angular';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'secured',
    component: SecuredComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
