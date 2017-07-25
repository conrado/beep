import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { ChatProvider } from '../../providers/chat/chat.provider';

import { Message } from '../../models/message/message.interface';

@Component({
  selector: 'app-last-message-list',
  templateUrl: 'last-message-list.component.html'
})
export class LastMessageListComponent implements OnInit {

  messageList$: Observable<Message[]>;

  constructor(
    private navCtrl: NavController,
    private chatPrv: ChatProvider
  ) {
  }

  ngOnInit() {
    this.messageList$ = this.chatPrv.getLastMessagesForUser();
  }

  navigateToMessage(message: Message) {
    const selectedProfile = {
      $key: message.userToId,
      firstName: message.userToProfile.firstName,
      lastName: message.userToProfile.lastName
    }
    this.navCtrl.push('MessagePage', {profile: selectedProfile});
  }

}
