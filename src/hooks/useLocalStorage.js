import { useState } from 'react';

export const useLocalStorage = () => {
    const item = JSON.parse(localStorage.getItem(key))

    const [storedValue, setStoredValue] = useState(item) 

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [storedValue, setValue];

};