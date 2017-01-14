import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PlanetsService } from './shared/planets.service';
import { MaterialModule } from '@angular/material';


import { AppComponent } from './app.component';
import 'hammerjs';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
