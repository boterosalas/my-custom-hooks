import { useState } from "react"


const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);
    const reset = () =>{
        setValues(initialState)
    }
    const handleInputChanges = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }
    return [values,handleInputChanges,reset]
}
export default useForm
