import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/component/home/home.component";
import {CurrentWeatherComponent} from "./weather/component/current-weather/current-weather.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'weather/:cityName', component: CurrentWeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
