import { Component, Output, EventEmitter } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth.provider';

import { Account } from '../../models/account/account.interface';
import { LoginResponse } from '../../models/login/login-response.interface';

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  account = {} as Account;

  @Output() registerStatus: EventEmitter<LoginResponse>;

  constructor(private authPrv: AuthProvider) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }

  async register() {
    try {
      const result = await this.authPrv.createUserWithEmailAndPassword(this.account);
      this.registerStatus.emit(result);
    }
    catch(e) {
      this.registerStatus.emit(e);
    }
  }

}
