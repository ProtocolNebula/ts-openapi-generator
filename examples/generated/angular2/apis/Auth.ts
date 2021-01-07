// THIS IS FILE IS AUTO-GENERATED
// PLEASE, NOT MODIFY MANUALLY

// Angular dependences
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// Main dependences
import { ApiBaseService } from '../../ApiBase/api-base.service';

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
      null
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
      requestBody
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
      requestBody
    );
  }

}
