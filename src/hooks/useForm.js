import { useState }  from 'react';


function useForm(valoresIniciais) {
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
        ...values,
        [chave]: valor,
        });
    }

    function handleChange(e) {
        setValue(e.target.getAttribute('name'), e.target.value);
    }

    function clearForm(valoresIniciais) {
        setValues(valoresIniciais)
    }

    return {
        handleChange,
        values,
        clearForm
    }
}

export default useForm;