import { User } from '../../models/user/user.interface'

const userList: User[] = [
  { firstName: 'Conrado', lastName: 'Buhrer', email: 'conrado@buhrer.net', avatar: 'assets/img/profile-placeholder.png' },
  { firstName: 'John', lastName: 'Doe', email: 'john@doe.com', avatar: 'assets/img/profile-placeholder.png' },
  { firstName: 'Sarah', lastName: 'Smith', email: 'sarah@smith.com', avatar: 'assets/img/profile-placeholder.png' },
  { firstName: 'Paul', lastName: 'Halliday', email: 'paul@paul.com', avatar: 'assets/img/profile-placeholder.png' },
];

export const USER_LIST = userList;
