import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactFormComponent } from './react-form/react-form.component';

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
  declarations: [
    ReactFormComponent
  ],

})
export class AppModule { }


