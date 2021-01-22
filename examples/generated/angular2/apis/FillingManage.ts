// THIS FILE IS AN AUTO GENERATED FILE
// PLEASE, DO NOT MODIFY MANUALLY

// Angular dependences
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

// Main dependences
import { ApiBaseService } from '../../ApiBase/api-base.service';
import { recursiveInstance, recursiveStringfy } from '../../ApiBase/model-base.model';

// Models dependences
import { FillRequest } from '../models/fill-request';

@Injectable({
  providedIn: 'root'
})
export class FillingManageService {

  constructor(
    private apiService: ApiBaseService
  ) {
  }

  /**
   * Fills days
  */
  public fill(
    requestBody: FillRequest,
  ): Observable<void> {
    return this.apiService.doPost(
      '/private/booking/manage/fill',
      null,
      recursiveStringfy(requestBody),
      null,
      // {  headers: { 'Content-Type': 'application/json' }  },
    );
  }

}
