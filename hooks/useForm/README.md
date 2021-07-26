# useForm Hook

Ejemplo de uso:
```
    const initialFormState = {
        name: '',
        age: 0,
        email: ''
    }
    const [values,handleInputChanges,reset] = useForm(initialFormState);
```