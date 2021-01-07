import { UserDirectionDTO } from './user-direction-dto';
import { UserDTO } from './user-dto';
import { UserProfileDTO } from './user-profile-dto';
import { UserRankingDTO } from './user-ranking-dto';

export class UserAuthResponse {

  direction?: UserDirectionDTO;

  profile?: UserProfileDTO;

  ranking?: UserRankingDTO;

  token?: string;

  user?: UserDTO;

}
