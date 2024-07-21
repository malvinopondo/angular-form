import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors, ControlContainer } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ServicescustomvalidationService {

  patternValidator(): ValidatorFn { 
    return (control: AbstractControl): ValidationErrors |null => { 
    const regex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=')
    const valid = regex.test(control.value);
    return valid ? null : { invalidPattern: true };
  }
};


MatchPassword(password: string, confirmPassword: string) {
  return (formGroup: FormGroup) => {
    const passwordControl = formGroup.controls[password];
    const confirmPasswordControl = formGroup.controls [confirmPassword];

    if(!passwordControl || !confirmPasswordControl) {
      return null;
    }

    if(confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch'])
      return null;  

  if (passwordControl.value !== confirmPasswordControl.value) {
    confirmPasswordControl.setErrors({ passwordMismatch: true});
  } else {
    confirmPasswordControl.setErrors(null);
  }
  return null;
}
}

userNameValidator(userControl: AbstractControl){
  return new Promise(resolve => {
    setTimeout(()=> {
      if (this.validateUserName(userControl.value)) {
        resolve({ userNameNotAvailable: true });
      } else {
        resolve(null);
      }
      }, 1000);
    });
  }

  validateUserName (userName: string) {
    const UserList = ['ankit', 'admin', 'user', 'superuser'];
    return(UserList.indexOf(userName) > -1);
  }  
}

