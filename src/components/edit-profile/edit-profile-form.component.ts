import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthProvider } from '../../providers/auth/auth.provider';
import { DataProvider } from '../../providers/data/data.provider';

import { User } from 'firebase/app';
import { Profile } from '../../models/profile/profile.interface';

/**
 * Generated class for the EditProfileComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnInit, OnDestroy {

  private authenticatedUserObsrv$: Subscription;
  private authenticatedUser: User;

  @Output() saveProfileResult: EventEmitter<Boolean>;

  @Input() profile: Profile;

  constructor(private dataPrv: DataProvider, private authPrv: AuthProvider) {
    this.saveProfileResult = new EventEmitter<Boolean>();
    this.authenticatedUserObsrv$ = this.authPrv.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    })
  }

  async saveProfile() {
    if(this.authenticatedUser) {
      this.profile.email = this.authenticatedUser.email;
      const result = await this.dataPrv.saveProfile(this.authenticatedUser, this.profile);
      this.saveProfileResult.emit(result);
    }
  }

  ngOnInit(): void {
    if(!this.profile) {
      this.profile = {} as Profile;
    }
  }

  ngOnDestroy(): void {
    this.authenticatedUserObsrv$.unsubscribe();
  }

}
