import { AbstractControl } from "@angular/forms";

// export function forbiddenNameValidators(control:AbstractControl){
//     const forbidden=/admin/.test(control.value);
//     return forbidden ? {'forbiddenName':{value:control.value}} :null;

// }
export function forbiddenNameValidators(regExp:RegExp){
    return (control:AbstractControl)=>{
     const forbidden=regExp.test(control.value);
        return forbidden ? {'forbiddenName':{value:control.value}} :null;
    }
   

}