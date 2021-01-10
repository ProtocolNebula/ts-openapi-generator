// THIS FILE IS AN AUTO GENERATED FILE
// PLEASE, DO NOT MODIFY MANUALLY

// Angular dependences
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Main dependences
import { ApiBaseService } from '../../ApiBase/api-base.service';

// Models dependences
import { BookingElementsWithDiscount } from '../models/booking-elements-with-discount';
import { CreateDiscountBookingRequest } from '../models/create-discount-booking-request';
import { GetDiscountBookingRequest } from '../models/get-discount-booking-request';
import { RemoveDiscountBookingRequest } from '../models/remove-discount-booking-request';

@Injectable({
  providedIn: 'root'
})
export class BookingManageDiscountsService {

  constructor(
    private apiService: ApiBaseService
  ) {
  }

  /**
   * Creates a new Discount
  */
  public create(
    requestBody: CreateDiscountBookingRequest,
  ): Observable<void> {
    return this.apiService.doPost(
      '/private/booking/manage/discounts/create',
      null,
      requestBody
    );
  }

  /**
   * Gets Discounts
  */
  public getDiscount(
    requestBody: GetDiscountBookingRequest,
  ): Observable<BookingElementsWithDiscount> {
    return this.apiService.doPost(
      '/private/booking/manage/discounts/',
      null,
      requestBody
    );
  }

  /**
   * Removes a Discount
  */
  public remove(
    requestBody: RemoveDiscountBookingRequest,
  ): Observable<void> {
    return this.apiService.doPost(
      '/private/booking/manage/discounts/remove',
      null,
      requestBody
    );
  }

}
