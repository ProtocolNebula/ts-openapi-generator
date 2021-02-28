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
import { ListDefaultBookingRequest } from '../models/list-default-booking-request';
import { RoomPriceSectionDTO } from '../models/room-price-section-dto';
import { SaveDefaultBookingRequest } from '../models/save-default-booking-request';

@Injectable({
  providedIn: 'root'
})
export class BookingManageAvailabilityService {

  constructor(
    private apiService: ApiBaseService
  ) {
  }

  /**
   * Default List of available rooms
  */
  public listDefault(
    requestBody: ListDefaultBookingRequest,
  ): Observable<any> {
    return this.apiService.doPost(
      '/private/booking/manage/availability/listDefault',
      null,
      recursiveStringfy(requestBody),
      {
        // headers: { 'Content-Type': 'application/json' }
        responseType: 'json',
      },
    );
  }

  /**
   * Save the available rooms
  */
  public saveDefault(
    requestBody: SaveDefaultBookingRequest,
  ): Observable<RoomPriceSectionDTO> {
    return this.apiService.doPost(
      '/private/booking/manage/availability/saveDefault',
      null,
      recursiveStringfy(requestBody),
      {
        // headers: { 'Content-Type': 'application/json' }
        responseType: 'json',
      },
    )
      .pipe(
        map(response => recursiveInstance(RoomPriceSectionDTO, response))
      );
  }

}
