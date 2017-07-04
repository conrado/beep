import { Component, OnInit } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth.provider';
import { DataProvider } from '../../providers/data/data.provider';

import { Profile } from '../../models/profile/profile.interface';

/**
 * Generated class for the ProfileViewComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-profile-view',
  templateUrl: 'profile-view.component.html'
})
export class ProfileViewComponent implements OnInit {

  userProfile: Profile;
  loader: Loading;

  constructor(private loadingCtrl: LoadingController, private dataPrv: DataProvider, private authPrv: AuthProvider) {
    this.loader = this.loadingCtrl.create({
      content: 'Loading profile...'
    })
  }

  ngOnInit(): void {
    this.loader.present();
    this.authPrv.getAuthenticatedUser().subscribe(user => {
      this.dataPrv.getProfile(user).subscribe((profile) => {
        this.userProfile = <Profile>profile.val();
        this.loader.dismiss();
      })
    })
  }

}
