import {APIClientOWMService} from "../service/apiclient-owm.service";

export class OwmUrlValidator {
  public static validate(value:string): boolean {
      return !(APIClientOWMService.CURRENT_WEATHER !== value &&
        APIClientOWMService.HOURLY_WEATHER !== value)
      ;
  }
}
