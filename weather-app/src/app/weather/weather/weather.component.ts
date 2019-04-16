import {Component, OnInit} from '@angular/core';
import {APIClientOWMService} from "../../core/service/apiclient-owm.service";
import {SnackBarErrorService} from "../../core/service/snack-bar-error.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from '@angular/router';
import {SearchWeather} from "../../core/model/search-weather";

@Component({
  selector: 'app-current-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weather = null;

  public errorBlockShow:boolean = false;

  public cityName:string;

  public weatherSubscription:Subscription;

  public searchWeather:SearchWeather;

  constructor(
    public activatedRouter:ActivatedRoute,
    public router:Router,
    public apiClientOWMService:APIClientOWMService,
    public snackBarError:SnackBarErrorService
  ) {}

  ngOnInit() {
    this.cityName = this.activatedRouter.snapshot.paramMap.get('cityName');
    this.searchCurrentWeather(this.cityName);
    this.searchWeather = new SearchWeather(this.cityName);
  }

  public searchCurrentWeather(cityName:string) : void {
    this.weather = null;
    this.errorBlockShow = false;

    this.weatherSubscription = this.apiClientOWMService.getWeather(APIClientOWMService.CURRENT_WEATHER, cityName)
      .subscribe((res) => {
        this.cityName = cityName;
        this.refreshUrl(this.cityName);

        this.weather = res.body as Object;

        this.weatherSubscription.unsubscribe();
      }, error =>  {
        this.errorBlockShow = true;

        this.snackBarError.openSnackBarError(error.message);
      })
    ;
  }

  private refreshUrl(cityName:string): void {
    this.router.navigate(['weather', cityName]);
  }
}
