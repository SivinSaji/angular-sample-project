import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CalenderComponent } from './calender/calender.component';
import { AuthGuard } from './shared/auth.guard';
import { TimerComponent } from './timer/timer.component';
import { BulbComponent } from './bulb/bulb.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'calender', component: CalenderComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'timer', component: TimerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'bulb', component: BulbComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
