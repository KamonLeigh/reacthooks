import { useLayoutEffect } from 'react';

function useBodyScrollLock(){
    useLayoutEffect(() => {
        const originalOverFlow = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
        

        // You can also return an arrow function
        return function () {

            document.body.style.overflow = originalOverFlow;
        }
    },[]);
}

export default useBodyScrollLock;