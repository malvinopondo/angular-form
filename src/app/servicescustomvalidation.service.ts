import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ServicescustomvalidationService {

  patternValidator(): ValidatorFn { 
    return (control: AbstractControl): ValidationErrors |null => { 
      
     return null
    }
    const regex = newRegExp('^(?=.*[a-z])(?=.*[A-Z])(?=)
  }
}
