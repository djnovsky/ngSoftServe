import {AbstractControl} from "@angular/forms";

export function ageValidator(control: AbstractControl) {
  if(control && (control.value !== null || control.value !== undefined)){
    var date = new Date(control.value)
    var ageDifMs = Date.now() - date.getTime();
    var ageDate = new Date(ageDifMs);
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);
       if (age<17) {
          return {
            isError: true
          };
        }
    // }
  }
  return null;
}
