import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import { Observable } from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {throwError} from "rxjs";
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class APIClientOWMService {

  static readonly HOURLY_WEATHER = 'https://api.openweathermap.org/data/2.5/forecast/hourly?q=%city%&units=metric&appid=%apiKey%';

  static readonly CURRENT_WEATHER = 'https://api.openweathermap.org/data/2.5/weather?q=%city%&units=metric&appid=%apiKey%';

  constructor(private httpClient:HttpClient) { }

  public getWeather(url:string, cityName:string): Observable<HttpResponse<string>> {
      if (!this.validate(url)) {
          throw new Error('URL is undefined by: ' + url);
      }

      let weatherObservable:Observable<HttpResponse<string>>;
      weatherObservable = this.callToOWM(this.prepareUrl(url, cityName));

      return weatherObservable;
  }

  private validate(url:string): boolean {
    return !(APIClientOWMService.CURRENT_WEATHER !== url &&
      APIClientOWMService.HOURLY_WEATHER !== url)
    ;
  }

  private prepareUrl(url:string, cityName:string): string {
    url = url.replace('%city%', cityName);
    url = url.replace('%apiKey%', environment.owmAPIKey);

    return url;
  }

  private callToOWM(url:string): Observable<HttpResponse<string>> {
    return this.httpClient.get<string>(url, {observe: 'response'})
      .pipe(
        retry(2),
        catchError(e => throwError(this.handleError(e)))
      )
    ;
  }

  private handleError(error:HttpErrorResponse): void {
    if (error.status === 404) {
      throw new Error('City not found!');
    }

    throw new Error('Undefined error, please contact with administrator or repeat the actions');
  }
}
