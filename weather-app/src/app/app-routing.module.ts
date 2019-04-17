import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {WeatherComponent} from "./weather/weather/weather.component";
import {NotFoundComponent} from "./errors/not-found/not-found.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'weather/:cityName', component: WeatherComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
