import { AbstractControl, ValidatorFn } from "@angular/forms";

export function firstLetterUpercase(): ValidatorFn {
    return (control: AbstractControl) => {
        const value = <string>control.value;
        if (!value) return { firstLetterUpercase: true };
        if (value.length === 0) return { firstLetterUpercase: true };
        if (value.charAt(0) !== value.charAt(0).toUpperCase())
            return { firstLetterUpercase: { message: 'The first letter must be uppercase', error: true } };
        return null;
    }
}
