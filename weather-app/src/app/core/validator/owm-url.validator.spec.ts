import { TestBed } from '@angular/core/testing';

import { OwmUrlValidator } from "./owm-url.validator";
import {APIClientOWMService} from "../service/apiclient-owm.service";

describe('OwmUrlValidator', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OwmUrlValidator = TestBed.get(OwmUrlValidator);
    expect(service).toBeTruthy();
  });
});

describe('Validate unit test', () => {
  it('should be true', function () {
    expect(OwmUrlValidator.validate(APIClientOWMService.HOURLY_WEATHER)).toEqual(true);
  });

  it('should be false', function () {
    expect(OwmUrlValidator.validate('unknown')).toEqual(false);
  });
});
