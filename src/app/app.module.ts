import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppComponent,
  ],
  providers: [
    provideClientHydration()
  ],

})
export class AppModule { }


