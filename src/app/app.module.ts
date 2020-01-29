import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination'
import { FormsModule } from '@angular/forms';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';  
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule ,  
    BrowserAnimationsModule,  
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
