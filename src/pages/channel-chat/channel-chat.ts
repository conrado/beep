import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';

import { ChatProvider } from '../../providers/chat/chat.provider';

import { Channel } from '../../models/channel/channel.interface';
import { ChannelMessage } from '../../models/channel-message/channel-message.interface';


@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  channel: Channel;
  channelMessages: FirebaseListObservable<ChannelMessage[]>;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private chatPrv: ChatProvider
  ) {
  }

  ionViewWillLoad() {
    this.channel = this.navParams.get('channel');
    this.channelMessages = this.chatPrv.getChannelChatRef(this.channel.$key);
  }

  sendMessage(content: string) {
    let channelMessage: ChannelMessage = {
      content
    }
    this.chatPrv.sendChannelChatMessage(this.channel.$key, channelMessage);
  }

}
