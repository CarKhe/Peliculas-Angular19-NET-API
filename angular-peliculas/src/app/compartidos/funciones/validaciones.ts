import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function capitalString(): ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null =>{
        const valor  = <string>control.value;
        if(!valor || valor.length === 0) return null;
        const firstValue = valor[0];
        if(firstValue !== firstValue.toUpperCase()){
            return {
                firstValue:{
                    mensaje : 'La primera letra debe ser Mayúscula'
                }
            }
        }
        return null;
    }
}