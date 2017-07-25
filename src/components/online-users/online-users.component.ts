import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';

import { DataProvider } from '../../providers/data/data.provider';

import { Profile } from '../../models/profile/profile.interface';

/**
 * Generated class for the OnlineUsersComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-online-users',
  templateUrl: 'online-users.component.html'
})
export class OnlineUsersComponent implements OnInit {

  userList: FirebaseListObservable<Profile[]>;

  constructor(
    private dataPrv: DataProvider,
    private navCtrl: NavController
  ) {
  }

  ngOnInit() {
    this.setUserOnline();
    this.getOnlineUsers();
  }

  setUserOnline() {
    // get the authenticated user
    this.dataPrv.getAuthenticatedUserProfile().subscribe(profile => {
      // call to a service that sets the user online within firebase
      this.dataPrv.setUserOnline(profile);
    })
  }

  getOnlineUsers() {
    this.userList = this.dataPrv.getOnlineUsers();
  }

  openChat(profile: Profile) {
    this.navCtrl.push('MessagePage', { profile });
  }

}
