import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth.provider';

import { Profile } from '../../models/profile/profile.interface';
import { Message } from '../../models/message/message.interface';

import { MESSAGE_LIST } from '../../mocks/message/message.mock';

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  selectedProfile: Profile;
  messageList: Message[];
  userId: string;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private authPrv: AuthProvider
  ) {
    this.messageList = MESSAGE_LIST;
  }

  ionViewWillLoad() {
    this.selectedProfile = this.navParams.get('profile');
    this.authPrv.getAuthenticatedUser()
      .subscribe(auth => this.userId = auth.uid);
  }

}
