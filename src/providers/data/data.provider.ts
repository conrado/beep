import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { database } from 'firebase';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { AuthProvider } from '../auth/auth.provider';

import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataProvider {

  profileObject: FirebaseObjectObservable<Profile>;
  profileList: FirebaseListObservable<Profile>;

  constructor(
    private database: AngularFireDatabase,
    private authPrv: AuthProvider,
  ) {
  }

  searchUser(searchstring){
    const query = this.database.list('/profiles', {
      query: {
        orderByChild: 'firstName',
        equalTo: searchstring
      }
    })
    return query.take(1);
  }

  getAuthenticatedUserProfile() {
    return this.authPrv.getAuthenticatedUser()
      .map(user => user.uid)
      .mergeMap(authId => this.database.object(`profiles/${authId}`))
      .take(1);
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

  setUserOnline(profile: Profile) {
    const ref = database().ref(`online-users/${profile.$key}`);
    try {
      ref.update({ ...profile });
      ref.onDisconnect().remove();
    }
    catch (e) {
      console.log(e);
    }
  }

  getOnlineUsers(): FirebaseListObservable<Profile[]> {
    return this.database.list(`online-users`);

  }

}
