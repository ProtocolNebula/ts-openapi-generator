// THIS FILE IS AN AUTO GENERATED FILE
// PLEASE, DO NOT MODIFY MANUALLY

// Angular dependences
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Main dependences
import { ApiBaseService } from '../../ApiBase/api-base.service';

// Models dependences
import { CountryDTO } from '../models/country-dto';
import { GetDirectionGetProvincesByCountryParams } from '../models/get-direction-get-provinces-by-country-params';
import { ProvinceDTO } from '../models/province-dto';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {

  constructor(
    private apiService: ApiBaseService
  ) {
  }

  /**
   * Retrieve all available countries
  */
  public getCountries(
  ): Observable<CountryDTO> {
    return this.apiService.doGet(
      '/private/direction/country_list',
      null,
      null
    );
  }

  /**
   * Retrieve all Country provinces
  */
  public getProvincesByCountry(
    uriOptions: GetDirectionGetProvincesByCountryParams,
  ): Observable<ProvinceDTO> {
    return this.apiService.doGet(
      '/private/direction/province_list',
      uriOptions,
      null
    );
  }

}
