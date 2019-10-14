import { useState } from 'react';


const useForm = () => {
    const [state, setState] = useState({});

    const handleChange = e => {
        e.persist();
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const clearForm = () => {
        setState({});
    }

    return [state, handleChange, clearForm];
}

export default useForm;