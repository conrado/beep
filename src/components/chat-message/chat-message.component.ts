import { Component, Input } from '@angular/core';

import { Message } from '../../models/message/message.interface';

/**
 * Generated class for the ChatMessageComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-chat-message',
  templateUrl: 'chat-message.component.html'
})
export class ChatMessageComponent {

  @Input() chatMessage: Message;

  @Input() chatIndex: number;

  constructor() {
  }

}
