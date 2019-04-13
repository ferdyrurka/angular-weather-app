import {Injectable} from "@angular/core";
import {DateService} from "../service/date.service";

@Injectable({
  providedIn: 'root'
})
export class HourlyWeathersParser {
  constructor(private dateService:DateService) {}

  public toToday(weathers:any): [] {
    let currentDate = this.dateService.getToday();
    let i:number = 0;
    let todayWeather:any = [];

    for (let weather of weathers) {
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

  public toNextDay(weathers:any): [] {
    let nextDayDate = this.dateService.getNexyDay();
    let i:number = 0;
    let nextDayWeather:any = [];

    for (let weather of weathers) {
      weather = weather as Object;

      if (!weather.dt_txt.search(nextDayDate)) {
        nextDayWeather[i] = weather;
        ++i;
      }
    }

    return nextDayWeather;
  }
}
