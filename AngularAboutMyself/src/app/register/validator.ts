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

// let myDate=new Date('1990-04-11');
//
// function _calculateAge(birthday) { // birthday is a date
//   var ageDifMs = Date.now() - birthday.getTime();
//   var ageDate = new Date(ageDifMs); // miliseconds from epoch
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }
//
// //onsole.log(d)
// console.log(_calculateAge(myDate))
