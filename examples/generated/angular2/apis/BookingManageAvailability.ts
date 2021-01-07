// THIS IS FILE IS AUTO-GENERATED
// PLEASE, NOT MODIFY MANUALLY

// Angular dependences
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Main dependences
import { ApiBaseService } from '../../ApiBase/api-base.service';

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
      requestBody
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
      requestBody
    );
  }

}
