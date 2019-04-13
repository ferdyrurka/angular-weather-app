import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {APIClientOWMService} from "../../core/service/apiclient-owm.service";
import {Subscription} from "rxjs";
import {SnackBarErrorService} from "../../core/service/snack-bar-error.service";
import {HourlyWeathersParser} from "../../core/parser/hourly-weathers.parser";

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
    private snackBarError:SnackBarErrorService,
    private hourlyWeathersParser:HourlyWeathersParser
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
        this.errorBlockShow = false;
        let weatherOWM = Array(res.body);
        this.weathers = this.hourlyWeathersParser.toToday(weatherOWM[0]['list']);
        this.weatherSubscription.unsubscribe();
      }, error =>  {
        this.errorBlockShow = true;
        this.snackBarError.openSnackBarError(error.message);
      })
    ;
  }
}
