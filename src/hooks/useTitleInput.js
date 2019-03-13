import { useState, useEffect, useDebugValue} from 'react';

function useTitleInput(initalValue) {
    const [value, setValue] = useState(initalValue);

    useEffect(() => {
        document.title = value;

    });
    useDebugValue(value.length > 0 ?  "Full" : "Empty");

    return [value, setValue]

}

export default useTitleInput;