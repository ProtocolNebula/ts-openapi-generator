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
import { CreateSectionsBookingRequest } from '../models/create-sections-booking-request';
import { DeleteBookingRequest } from '../models/delete-booking-request';
import { GetSectionsBookingRequest } from '../models/get-sections-booking-request';
import { ListSectionsBookingRequest } from '../models/list-sections-booking-request';
import { RoomPriceSectionDTO } from '../models/room-price-section-dto';
import { RoomsPricesDTO } from '../models/rooms-prices-dto';
import { UpdateSectionsBookingRequest } from '../models/update-sections-booking-request';

@Injectable({
  providedIn: 'root'
})
export class BookingManageRoomPricesService {

  constructor(
    private apiService: ApiBaseService
  ) {
  }

  /**
   * List of room prices from Bookings
  */
  public create(
    requestBody: CreateSectionsBookingRequest,
  ): Observable<RoomPriceSectionDTO> {
    return this.apiService.doPost(
      '/private/booking/manage/roomPrices/create',
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

  /**
   * Delete
  */
  public delete(
    requestBody: DeleteBookingRequest,
  ): Observable<void> {
    return this.apiService.doPost(
      '/private/booking/manage/roomPrices/delete',
      null,
      recursiveStringfy(requestBody),
      {
        // headers: { 'Content-Type': 'application/json' }
        responseType: 'blob',
      },
    );
  }

  /**
   * Get Sections
  */
  public getSection(
    requestBody: GetSectionsBookingRequest,
  ): Observable<RoomPriceSectionDTO> {
    return this.apiService.doPost(
      '/private/booking/manage/roomPrices/',
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

  /**
   * List of room prices from Bookings
  */
  public listSection(
    requestBody: ListSectionsBookingRequest,
  ): Observable<RoomsPricesDTO[]> {
    return this.apiService.doPost(
      '/private/booking/manage/roomPrices/listSection',
      null,
      recursiveStringfy(requestBody),
      {
        // headers: { 'Content-Type': 'application/json' }
        responseType: 'json',
      },
    )
      .pipe(
        map(response => recursiveInstance(RoomsPricesDTO, response))
      );
  }

  /**
   * List of room prices from Bookings
  */
  public update(
    requestBody: UpdateSectionsBookingRequest,
  ): Observable<void> {
    return this.apiService.doPost(
      '/private/booking/manage/roomPrices/update',
      null,
      recursiveStringfy(requestBody),
      {
        // headers: { 'Content-Type': 'application/json' }
        responseType: 'blob',
      },
    );
  }

}
