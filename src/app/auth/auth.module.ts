import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {MatButtonModule} from '@angular/material/button';

import { MainComponent } from './pages/main/main.component';
import { ToDoComponent } from './pages/to-do/to-do.component';
import { FirstLetterPipe } from './pipes/first-letter.pipe';


@NgModule({
  declarations: [
    MainComponent,
    ToDoComponent,
    FirstLetterPipe,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SweetAlert2Module,
    MatButtonModule
  ],

})
export class AuthModule { }
