import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';

import { ChatProvider } from '../../providers/chat/chat.provider';

import { Channel } from '../../models/channel/channel.interface';

@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  channelList: Observable<Channel[]>;

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

}
