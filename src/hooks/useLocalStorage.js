// import { useState } from "react";

// export function useLocalStorage(key, initialValue) {
//   const item = JSON.parse(localStorage.getItem(key));

//   const [storedValue, setStoredValue] = useState(item);

//   const setValue = value => {
//     window.localStorage.setItem(key, JSON.stringify(value));
//     setStoredValue(value);
//   };

//   return [storedValue, setValue];
// }

import React, { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = (value) => {
        window.localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    }

    return [storedValue, setValue];
}

export default useLocalStorage 
