import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';

import { ChatProvider } from '../../providers/chat/chat.provider';

import { Channel } from '../../models/channel/channel.interface';

@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  channelList: FirebaseListObservable<Channel[]>;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private chatPrv: ChatProvider
  ) {
  }

  showAddChannelDialog(){
    this.alertCtrl.create({
      title: 'Channel Name',
      inputs: [{
        name: 'channelName'
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.chatPrv.addChannel(data.channelName)
          }
        }
      ]
    }).present();
  }

  ionViewWillLoad() {
    this.getChannels();
  }

  getChannels() {
    this.channelList = this.chatPrv.getChannelListRef();
  }

  selectChannel(channel: Channel) {
    this.navCtrl.push('ChannelChatPage', { channel });
  }

}
