import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private dd:number;

  private mm:number;

  private yyyy:number;

  constructor() {
    let date:Date = new Date();
    this.dd = date.getDate();
    this.mm = date.getMonth() + 1;
    this.yyyy = date.getFullYear();
  }

  public getToday(): string {
    return String(this.yyyy) + '-'
      + String(this.mm).padStart(2, '0') + '-'
      + String(this.dd).padStart(2, '0')
    ;
  }

  public getNexyDay(): string {
    return String(this.yyyy) + '-'
      + String(this.mm).padStart(2, '0') + '-'
      + String(this.dd + 1).padStart(2, '0')
      ;
  }
}
