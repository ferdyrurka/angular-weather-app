import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatInputModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatTableModule, MatExpansionModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home/home.component';
import { WeatherComponent } from './weather/weather/weather.component';
import { HttpClientModule } from "@angular/common/http";
import { SearchWeatherFormComponent } from './home/search-weather-form/search-weather-form.component';
import {FormsModule} from "@angular/forms";
import { TodayWeatherComponent } from './weather/today-weather/today-weather.component';
import { NextDayWeatherComponent } from './weather/next-day-weather/next-day-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    SearchWeatherFormComponent,
    TodayWeatherComponent,
    NextDayWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatTableModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
