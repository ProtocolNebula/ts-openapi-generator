// THIS IS FILE IS AUTO-GENERATED
// PLEASE, NOT MODIFY MANUALLY

// Angular dependences
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Main dependences
import { ApiBaseService } from '../../ApiBase/api-base.service';

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
      requestBody
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
      requestBody
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
      requestBody
    );
  }

  /**
   * List of room prices from Bookings
  */
  public listSection(
    requestBody: ListSectionsBookingRequest,
  ): Observable<RoomsPricesDTO> {
    return this.apiService.doPost(
      '/private/booking/manage/roomPrices/listSection',
      null,
      requestBody
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
      requestBody
    );
  }

}
