import { Message } from '../../models/message/message.interface'
import { User } from '../../models/user/user.interface'

import { USER_LIST } from '../user/user.mock'

const userList = USER_LIST;
const messageList: Message[] = [];

userList.forEach(user => {
  messageList.push({user: user, date: new Date(), lastMessage: 'Hello'})
})

export const MESSAGE_LIST = messageList;
