import { Message } from '../../models/message/message.interface'
import { Profile } from '../../models/profile/profile.interface'

import { PROFILE_LIST } from '../profile/profile.mock'

const userList = PROFILE_LIST;
const messageList: Message[] = [];

//userList.forEach(user => {
  //messageList.push({user: user, date: new Date(), lastMessage: 'Hello'})
  //messageList.push({user: user, date: new Date(), lastMessage: 'Hello'})
//})

export const MESSAGE_LIST = messageList;
