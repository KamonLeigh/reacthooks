import { useState, useEffect} from 'react';

function useTitleInput(initalValue) {
    const [value, setValue] = useState(initalValue);

    useEffect(() => {
        document.title = value;

    });
    return [value, setValue]

}

export default useTitleInput;