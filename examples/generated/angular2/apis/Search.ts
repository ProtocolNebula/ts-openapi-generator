// THIS IS FILE IS AUTO-GENERATED
// PLEASE, NOT MODIFY MANUALLY

// Angular dependences
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Main dependences
import { ApiBaseService } from '../../ApiBase/api-base.service';

// Models dependences
import { GetSearchSearchRoomsParams } from '../models/get-search-search-rooms-params';
import { GetSearchSearchUsersParams } from '../models/get-search-search-users-params';
import { RoomEscapeDTO } from '../models/room-escape-dto';
import { UserSearchResultDTO } from '../models/user-search-result-dto';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private apiService: ApiBaseService
  ) {
  }

  /**
   * Search for room escapes without pagination, return maximum 15 records
  */
  public searchRooms(
    uriOptions: GetSearchSearchRoomsParams,
  ): Observable<RoomEscapeDTO> {
    return this.apiService.doGet(
      '/private/search/rooms',
      uriOptions,
      null
    );
  }

  /**
   * Search for users without pagination, return maximum 20 records
  */
  public searchUsers(
    uriOptions: GetSearchSearchUsersParams,
  ): Observable<UserSearchResultDTO> {
    return this.apiService.doGet(
      '/private/search/users',
      uriOptions,
      null
    );
  }

}