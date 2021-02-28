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
      null,
      {
        
        responseType: 'json',
      },
    )
      .pipe(
        map(response => recursiveInstance(GameStatusResponse, response))
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
      null,
      {
        
        responseType: 'json',
      },
    )
      .pipe(
        map(response => recursiveInstance(GameStatusResponse, response))
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
      recursiveStringfy(requestBody),
      {
        // headers: { 'Content-Type': 'application/json' }
        responseType: 'json',
      },
    )
      .pipe(
        map(response => recursiveInstance(GameStatusResponse, response))
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
      recursiveStringfy(requestBody),
      {
        // headers: { 'Content-Type': 'application/json' }
        responseType: 'json',
      },
    )
      .pipe(
        map(response => recursiveInstance(GameStatusResponse, response))
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
      recursiveStringfy(requestBody),
      {
        // headers: { 'Content-Type': 'application/json' }
        responseType: 'json',
      },
    )
      .pipe(
        map(response => recursiveInstance(GameStatusResponse, response))
      );
  }

}
