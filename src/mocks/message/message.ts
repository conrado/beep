import { Message } from '../../models/message/message'
import { User } from '../../models/user/user'

import { USER_LIST } from '../user/user'

const userList = USER_LIST;
const messageList: Message[] = [];

userList.forEach(user => {
  messageList.push({user: user, date: new Date(), lastMessage: 'Hello'})
})

export const MESSAGE_LIST = messageList;
