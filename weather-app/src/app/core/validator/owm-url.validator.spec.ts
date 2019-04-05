import { OwmUrlValidator } from "./owm-url.validator";
import {APIClientOWMService} from "../service/apiclient-owm.service";

describe('Validate unit test', () => {
  it('should be true', function () {
    expect(OwmUrlValidator.validate(APIClientOWMService.HOURLY_WEATHER)).toEqual(true);
  });

  it('should be false', function () {
    expect(OwmUrlValidator.validate('unknown')).toEqual(false);
  });
});
