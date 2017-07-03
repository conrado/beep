import { Component } from '@angular/core';

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
export class ProfileViewComponent {

  text: string;

  constructor() {
    console.log('Hello ProfileViewComponent Component');
    this.text = 'Hello World';
  }

}
