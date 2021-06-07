import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ToDoComponent } from './pages/to-do/to-do.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    MainComponent,
    ToDoComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SweetAlert2Module
  ],

})
export class AuthModule { }
