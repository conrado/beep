import { Component, Output, EventEmitter } from '@angular/core';
import { DataProvider } from '../../providers/data/data.provider';

import { Profile } from '../../models/profile/profile.interface';

/**
 * Generated class for the ProfileSearchComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-profile-search',
  templateUrl: 'profile-search.component.html'
})
export class ProfileSearchComponent {

  query: string;
  profileList: Profile[];

  @Output() selectedProfile: EventEmitter<Profile>;

  constructor(private dataPrv: DataProvider) {
    this.selectedProfile = new EventEmitter<Profile>();
  }

  selectProfile(profile: Profile) {
    this.selectedProfile.emit(profile);
  }

  searchUser(query: string) {
    const trimmedQuery = query.trim();
    if(trimmedQuery === query) {
      this.dataPrv.searchUser(query).subscribe(profiles => {
        this.profileList = profiles;
      })
    }
  }

}
