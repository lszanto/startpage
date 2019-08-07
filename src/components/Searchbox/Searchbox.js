import React from 'react';
import Config from '../../config/Config';
import useFormField from '../../hooks/FormField.hook';
import './Searchbox.css';

function Searchbox() {
    const searchTerm = useFormField('');

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            window.open(Config.Searchbox.url + searchTerm.value);
            searchTerm.setValue('');
        }
    }

    return (
        <div className="Searchbox" >
            <input type="text" name="searchTerm" id="searchTerm" {...searchTerm} onKeyPress={handleKeyPress} placeholder={Config.Searchbox.message} />
        </div>
    );
}

export default Searchbox;
