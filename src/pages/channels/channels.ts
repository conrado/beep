import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { ChatProvider } from '../../providers/chat/chat.provider';

/**
 * Generated class for the ChannelsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private chatPrv: ChatProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChannelsPage');
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

}
