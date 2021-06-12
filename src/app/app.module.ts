import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './shared/sidenav/sidenav.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
