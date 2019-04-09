export class SearchWeather {
  constructor(private _cityName:string) {}

  get cityName(): string {
    return this._cityName;
  }
}
