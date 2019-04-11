import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {APIClientOWMService} from "../../core/service/apiclient-owm.service";
import {Subscription} from "rxjs";
import {SnackBarErrorService} from "../../core/service/snack-bar-error.service";

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.css']
})
export class TodayWeatherComponent implements OnInit {

  private weathers = null;

  private weatherSubscription:Subscription;

  private errorBlockShow:boolean = false;

  private readonly displayedColumns: string[] = [
    'date', 'description', 'temp_min', 'temp_max',
    'humidity', 'wind'
  ];

  constructor(
    private activatedRoute:ActivatedRoute,
    private apiClientOWMService:APIClientOWMService,
    private snackBarError:SnackBarErrorService
  ) { }

  ngOnInit() {
    let cityName:string = this.activatedRoute.snapshot.paramMap.get('cityName');
    this.searchTodayWeather(cityName);
  }

  public searchTodayWeather(cityName:string): void {
    this.weathers = null;
    this.errorBlockShow = false;

    this.weatherSubscription = this.apiClientOWMService.getWeather(APIClientOWMService.HOURLY_WEATHER, cityName)
      .subscribe((res) => {
        let weatherOWM = Array(res.body);
        this.weathers = this.hourlyToToday(Array(weatherOWM[0]['list']));
        this.weatherSubscription.unsubscribe();
      }, error =>  {
        this.errorBlockShow = true;
        this.snackBarError.openSnackBarError(error.message);
      })
    ;
  }

  private getCurrentDate(): string {
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();

    return  yyyy + '-' + mm + '-' + dd;
  }

  private hourlyToToday(weathers:any): [] {
    let currentDate = this.getCurrentDate();
    let i:number = 0;
    let todayWeather:any = [];

    for (let weather of weathers[0]) {
      weather = weather as Object;

      if (!weather.dt_txt.search(currentDate)) {
        todayWeather[i] = weather;
        ++i;
        continue;
      }

      break;
    }

    return todayWeather;
  }
}
