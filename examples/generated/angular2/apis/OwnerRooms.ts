// THIS FILE IS AN AUTO GENERATED FILE
// PLEASE, DO NOT MODIFY MANUALLY

// Angular dependences
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Main dependences
import { ApiBaseService } from '../../ApiBase/api-base.service';

// Models dependences
import { ListRoomsRequest } from '../models/list-rooms-request';
import { RoomEscapeDTO } from '../models/room-escape-dto';

@Injectable({
  providedIn: 'root'
})
export class OwnerRoomsService {

  constructor(
    private apiService: ApiBaseService
  ) {
  }

  /**
   * List all rooms of an authenticated owner
  */
  public list(
    requestBody: ListRoomsRequest,
  ): Observable<RoomEscapeDTO> {
    return this.apiService.doPost(
      '/private/owner/rooms/list',
      null,
      requestBody
    );
  }

}
