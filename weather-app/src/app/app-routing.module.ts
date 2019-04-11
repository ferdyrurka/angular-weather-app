import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {WeatherComponent} from "./weather/weather/weather.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'weather/:cityName', component: WeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
