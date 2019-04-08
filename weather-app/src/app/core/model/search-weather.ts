export class SearchWeather {
  constructor(private _cityName:string, private _when:string) {}

  get cityName(): string {
    return this._cityName;
  }

  get when(): string {
    return this._when;
  }
}
