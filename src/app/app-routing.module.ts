import { NgModule, SimpleChanges } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { UserListComponent } from './user/user-list/user-list.component';


const routes: Routes = [
  // { path: '', component: HomeComponent },
  // { path: 'users', component: UserListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
