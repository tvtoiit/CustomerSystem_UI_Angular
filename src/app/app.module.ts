import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/CustomerSystem/LoginComponent/Login.component';
import { ElementInputComponent } from './Component/CustomerSystem/extend/ElementInput/Input.compoent';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, ElementInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
