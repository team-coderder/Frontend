import React, { useState } from 'react';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

function Test() {
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setValue(inputValue);
        console.log(event.target.value);
    };

    return (
        <div>
            <TextInput
                width="300px"
                height="20px"
                type="password"
                value={value}
                onChange={handleChange}
            />

            <Button
                onClick={() => {
                    setValue('');
                    console.log('reset!');
                }}
            >
                reset
            </Button>
        </div>
    );
}

export default Test;
