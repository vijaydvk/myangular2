import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { AppHomeComponent } from './HomePage/weather.component';
import { CONST_ROUTING } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
	HomeComponent,
	AppHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	CONST_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
