import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ChatProvider {

  constructor(
    private database: AngularFireDatabase
  ) {
    console.log('Hello ChatProvider Provider');
  }

  addChannel(channelName: string) {
    this.database.list(`/channel-names/`).push({ name: channelName });
  }

}
