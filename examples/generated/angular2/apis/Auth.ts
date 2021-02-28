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
import { LoginRequest } from '../models/login-request';
import { SocialLoginRequest } from '../models/social-login-request';
import { UserAuthResponse } from '../models/user-auth-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiBaseService
  ) {
  }

  /**
   * Retrieve login user info response
  */
  public getUserProfile(
  ): Observable<UserAuthResponse> {
    return this.apiService.doGet(
      '/auth/profile',
      null,
      null,
      {
        
        responseType: 'json',
      },
    )
      .pipe(
        map(response => recursiveInstance(UserAuthResponse, response))
      );
  }

  /**
   * Login user endpoint
  */
  public login(
    requestBody: LoginRequest,
  ): Observable<UserAuthResponse> {
    return this.apiService.doPost(
      '/auth/login',
      null,
      recursiveStringfy(requestBody),
      {
        // headers: { 'Content-Type': 'application/json' }
        responseType: 'json',
      },
    )
      .pipe(
        map(response => recursiveInstance(UserAuthResponse, response))
      );
  }

  /**
   * Login with Social Networks
  */
  public socialLogin(
    requestBody: SocialLoginRequest,
  ): Observable<UserAuthResponse> {
    return this.apiService.doPost(
      '/auth/social',
      null,
      recursiveStringfy(requestBody),
      {
        // headers: { 'Content-Type': 'application/json' }
        responseType: 'json',
      },
    )
      .pipe(
        map(response => recursiveInstance(UserAuthResponse, response))
      );
  }

}
