import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import 'rxjs/add/operator/take';

import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {

  profileObject: FirebaseObjectObservable<Profile>

  constructor(private database: AngularFireDatabase) {
  }

  getProfile(user: User) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`, { preserveSnapshot: true });

    return this.profileObject.take(1);
  }

  async saveProfile(user: User, profile: Profile){
    this.profileObject = this.database.object(`/profiles/${user.uid}`);
    try {
      await this.profileObject.set(profile);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

}
