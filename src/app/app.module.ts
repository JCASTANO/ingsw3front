import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MaterialExampleModule} from './material.module';
import { GlobalErrorHandler } from './global-error-handler';
import { JwtInterceptor } from './jwt.interceptor';
import { AutorizacionGuard } from './autorizacion.guard';
import { HelpComponent } from './help/help.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: GlobalErrorHandler,
  },
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  AutorizacionGuard,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
