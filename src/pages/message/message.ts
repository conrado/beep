import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { DataProvider } from '../../providers/data/data.provider';
import { ChatProvider } from '../../providers/chat/chat.provider';

import { Profile } from '../../models/profile/profile.interface';
import { Message } from '../../models/message/message.interface';

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  selectedProfile: Profile;
  messageList: Observable<Message[]>;
  userId: string;
  userProfile: Profile;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private dataPrv: DataProvider,
    private chatPrv: ChatProvider
  ) {
  }

  ionViewWillLoad() {
    this.selectedProfile = this.navParams.get('profile');
    this.dataPrv.getAuthenticatedUserProfile()
      .subscribe(profile => {
        this.userProfile = profile;
        this.userId = profile.$key;
      });
    this.messageList = this.chatPrv.getChats(this.selectedProfile.$key);
  }

  async sendMessage(content: string) {
    try {
      const message: Message = {
        userToId: this.selectedProfile.$key,
        userToProfile: {
          firstName: this.selectedProfile.firstName,
          lastName: this.selectedProfile.lastName
        },
        userFromProfile: {
          firstName: this.userProfile.firstName,
          lastName: this.userProfile.lastName
        },
        userFromId: this.userId,
        content: content
      }
      await this.chatPrv.sendChat(message);
    } catch (e) {
      console.log(e);
    }
  }

}
