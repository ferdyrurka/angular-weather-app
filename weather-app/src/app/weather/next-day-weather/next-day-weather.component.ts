import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {APIClientOWMService} from "../../core/service/apiclient-owm.service";
import {SnackBarErrorService} from "../../core/service/snack-bar-error.service";
import {HourlyWeathersParser} from "../../core/parser/hourly-weathers.parser";

@Component({
  selector: 'app-next-day-weather',
  templateUrl: './next-day-weather.component.html',
  styleUrls: ['./next-day-weather.component.css']
})
export class NextDayWeatherComponent implements OnInit {

  public weathers = null;

  public weatherSubscription:Subscription;

  public errorBlockShow:boolean = false;

  public readonly displayedColumns: string[] = [
    'date', 'description', 'temp_min', 'temp_max',
    'humidity', 'wind'
  ];


  constructor(
    public activatedRoute:ActivatedRoute,
    public apiClientOWMService:APIClientOWMService,
    public snackBarError:SnackBarErrorService,
    public hourlyWeathersParser:HourlyWeathersParser
  ) { }

  ngOnInit() {
    let cityName:string = this.activatedRoute.snapshot.paramMap.get('cityName');
    this.searchNextDayForecast(cityName);
  }

  private searchNextDayForecast(cityName:string): void {
    this.weathers = null;
    this.errorBlockShow = false;

    this.weatherSubscription = this.apiClientOWMService.getWeather(APIClientOWMService.HOURLY_WEATHER, cityName)
      .subscribe((res) => {
        let weatherOWM = Array(res.body);
        this.weathers = this.hourlyWeathersParser.toNextDay(weatherOWM[0]['list']);
        this.weatherSubscription.unsubscribe();
      }, error =>  {
        this.errorBlockShow = true;
        this.snackBarError.openSnackBarError(error.message);
      })
    ;
  }
}
