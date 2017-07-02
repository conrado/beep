import { Profile } from '../../models/profile/profile.interface'

const profileList: Profile[] = [
  { firstName: 'Conrado', lastName: 'Buhrer', email: 'conrado@buhrer.net', avatar: 'assets/img/profile-placeholder.png', dateOfBirth: new Date() },
  { firstName: 'John', lastName: 'Doe', email: 'john@doe.com', avatar: 'assets/img/profile-placeholder.png', dateOfBirth: new Date() },
  { firstName: 'Sarah', lastName: 'Smith', email: 'sarah@smith.com', avatar: 'assets/img/profile-placeholder.png', dateOfBirth: new Date() },
  { firstName: 'Paul', lastName: 'Halliday', email: 'paul@paul.com', avatar: 'assets/img/profile-placeholder.png', dateOfBirth: new Date() },
];

export const PROFILE_LIST = profileList;
