import {Component, OnInit} from '@angular/core';
import {APIClientOWMService} from "../../core/service/apiclient-owm.service";
import {SnackBarErrorService} from "../../core/service/snack-bar-error.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from '@angular/router';
import {SearchWeather} from "../../core/model/search-weather";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  private weather = null;

  private errorBlockShow:boolean = false;

  private cityName:string;

  private weatherSubscription:Subscription;

  private searchWeather:SearchWeather;

  constructor(
    private router:ActivatedRoute,
    private apiClientOWMService:APIClientOWMService,
    private snackBarError:SnackBarErrorService
  ) {}

  ngOnInit() {
    this.cityName = this.router.snapshot.paramMap.get('cityName');
    this.searchCurrentWeather(this.cityName);
    this.searchWeather = new SearchWeather(this.cityName);
  }

  public searchCurrentWeather(cityName:string) : void {
    this.weather = null;
    this.errorBlockShow = false;

    this.weatherSubscription = this.apiClientOWMService.getWeather(APIClientOWMService.CURRENT_WEATHER, cityName)
      .subscribe((res) => {
        this.cityName = cityName;
        this.weather = res.body as Object;
        this.weatherSubscription.unsubscribe();
      }, error =>  {
        this.errorBlockShow = true;
        this.snackBarError.openSnackBarError(error.message);
      })
    ;
  }
}
