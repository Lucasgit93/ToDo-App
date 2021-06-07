import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const routes: Routes = [
  {
    path:"app",
    loadChildren: ()=> import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path:"**",
    redirectTo:"app"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SweetAlert2Module.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
