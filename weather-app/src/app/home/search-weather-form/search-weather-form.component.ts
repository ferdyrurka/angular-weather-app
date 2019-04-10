import {Component} from '@angular/core';
import {SearchWeather} from "../../core/model/search-weather";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-weather-form',
  templateUrl: './search-weather-form.component.html',
  styleUrls: ['./search-weather-form.component.css']
})
export class SearchWeatherFormComponent {

  private model = new SearchWeather('Warsaw');

  constructor(private router:Router) {}

  public gotoCurrentWeather(): void {
    this.router.navigate(
      [
        'weather', this.model.cityName
      ]
    );
  }
}
