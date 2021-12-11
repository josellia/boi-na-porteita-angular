# Função lengthValidation

```jsx

 lengthValidation(control: AbstractControl, errorName: string):number{
    const error = control.errors ? control.errors[errorName] : null;
    return error.requiredLength || error.min || error.max || 0;
  }
```
