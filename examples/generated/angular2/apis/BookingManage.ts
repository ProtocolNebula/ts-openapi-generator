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
      recursiveStringfy(requestBody),
      {
        // headers: { 'Content-Type': 'application/json' }
        responseType: 'json',
      },
    )
      .pipe(
        map(response => recursiveInstance(BookingRoomsDTO, response))
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
      recursiveStringfy(requestBody),
      {
        // headers: { 'Content-Type': 'application/json' }
        responseType: 'json',
      },
    )
      .pipe(
        map(response => recursiveInstance(BookingRoomsDTO, response))
      );
  }

  /**
   * List a Booking
  */
  public list(
    requestBody: ListBookingRequest,
  ): Observable<BookingRoomsDTO[]> {
    return this.apiService.doPost(
      '/private/booking/manage/list',
      null,
      recursiveStringfy(requestBody),
      {
        // headers: { 'Content-Type': 'application/json' }
        responseType: 'json',
      },
    )
      .pipe(
        map(response => recursiveInstance(BookingRoomsDTO, response))
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
      recursiveStringfy(requestBody),
      {
        // headers: { 'Content-Type': 'application/json' }
        responseType: 'json',
      },
    )
      .pipe(
        map(response => recursiveInstance(BookingRoomsDTO, response))
      );
  }

}
