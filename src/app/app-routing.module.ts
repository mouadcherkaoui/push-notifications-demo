import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { HomeComponent } from './pages/home/home.component';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'subscriptions', component: SubscriptionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
