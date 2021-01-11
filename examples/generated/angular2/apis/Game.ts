// THIS FILE IS AN AUTO GENERATED FILE
// PLEASE, DO NOT MODIFY MANUALLY

// Angular dependences
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Main dependences
import { ApiBaseService } from '../../ApiBase/api-base.service';

// Models dependences
import { GameStatusResponse } from '../models/game-status-response';
import { GetGameGetStatusParams } from '../models/get-game-get-status-params';
import { RateGameRequest } from '../models/rate-game-request';
import { StartGameRequest } from '../models/start-game-request';
import { ValidateGameRequest } from '../models/validate-game-request';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(
    private apiService: ApiBaseService
  ) {
  }

  /**
   * Stop a game that is not validated yet
  */
  public cancel(
  ): Observable<GameStatusResponse> {
    return this.apiService.doPost(
      '/private/game/cancel',
      null,
      null
    );
  }

  /**
   * Get the active game status
  */
  public getStatus(
    uriOptions: GetGameGetStatusParams,
  ): Observable<GameStatusResponse> {
    return this.apiService.doGet(
      '/private/game/status',
      uriOptions,
      null
    );
  }

  /**
   * Send a rating to the room and finalize the game.
  */
  public rateRoom(
    requestBody: RateGameRequest,
  ): Observable<GameStatusResponse> {
    return this.apiService.doPost(
      '/private/game/rate',
      null,
      requestBody
    );
  }

  /**
   * Start a new game
  */
  public start(
    requestBody: StartGameRequest,
  ): Observable<GameStatusResponse> {
    return this.apiService.doPost(
      '/private/game/start',
      null,
      requestBody
    );
  }

  /**
   * Set game as completed with passport code
  */
  public validate(
    requestBody: ValidateGameRequest,
  ): Observable<GameStatusResponse> {
    return this.apiService.doPost(
      '/private/game/validate',
      null,
      requestBody
    );
  }

}
