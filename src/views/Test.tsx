import React, { useState } from 'react';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

function Test() {
    const [value, setValue] = useState('');
    const [x, setX] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setValue(inputValue);
        console.log(event.target.value);
    };

    const handleX = (event: React.ChangeEvent<HTMLInputElement>) => {
        setX(event.target.value);
    };

    return (
        <div>
            <TextInput
                width="300px"
                height="20px"
                type="password"
                value={value}
                onChange={handleChange}
                error={true}
                message="prop message ex)비밀번호가 일치하지 않습니다"
            />

            <TextInput
                width="300px"
                height="20px"
                type="id"
                value={x}
                onChange={handleX}
                error={false}
                message="hiihi"
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
