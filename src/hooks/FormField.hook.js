import { useState } from 'react';

export default function useFormField(initialValue) {
    const [ value, setValue ] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange,
        setValue: setValue,
    };
}
