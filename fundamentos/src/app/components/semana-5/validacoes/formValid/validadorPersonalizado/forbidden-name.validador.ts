import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
export function forbiddenName(forbidden: string): Validators {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const forbiddenMatch =
      control.value.toLowerCase() === forbidden.toLowerCase();
    return forbiddenMatch ? { forbiddenName: { value: control.value } } : null;
  };
}
