import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/template/home/home.component';
import { LoginComponent } from './account/login/login.component'
import { EventsUpdateComponent } from './components/events-update/events-update.component';

const routes: Routes = [
 {
  path: '',
  component: LoginComponent
 },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: "events/:id",
    component: EventsUpdateComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
