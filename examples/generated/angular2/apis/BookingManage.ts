// THIS FILE IS AN AUTO GENERATED FILE
// PLEASE, DO NOT MODIFY MANUALLY

// Angular dependences
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Main dependences
import { ApiBaseService } from '../../ApiBase/api-base.service';

// Models dependences
import { BookBookingRequest } from '../models/book-booking-request';
import { BookingRoomsDTO } from '../models/booking-rooms-dto';
import { CancelBookingRequest } from '../models/cancel-booking-request';
import { ListBookingRequest } from '../models/list-booking-request';
import { StatusBookingRequest } from '../models/status-booking-request';

@Injectable({
  providedIn: 'root'
})
export class BookingManageService {

  constructor(
    private apiService: ApiBaseService
  ) {
  }

  /**
   * Books a new Booking
  */
  public book(
    requestBody: BookBookingRequest,
  ): Observable<BookingRoomsDTO> {
    return this.apiService.doPost(
      '/private/booking/manage/book',
      null,
      requestBody
    );
  }

  /**
   * Cancel a Booking
  */
  public cancel(
    requestBody: CancelBookingRequest,
  ): Observable<BookingRoomsDTO> {
    return this.apiService.doPost(
      '/private/booking/manage/cancel',
      null,
      requestBody
    );
  }

  /**
   * List a Booking
  */
  public list(
    requestBody: ListBookingRequest,
  ): Observable<BookingRoomsDTO> {
    return this.apiService.doPost(
      '/private/booking/manage/list',
      null,
      requestBody
    );
  }

  /**
   * Status of a Booking
  */
  public status(
    requestBody: StatusBookingRequest,
  ): Observable<BookingRoomsDTO> {
    return this.apiService.doPost(
      '/private/booking/manage/status',
      null,
      requestBody
    );
  }

}
