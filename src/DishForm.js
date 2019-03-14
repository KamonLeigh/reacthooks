import React, { useRef} from 'react';
import useBodyScrollLock from './hooks/bodyScrollLock';
import  useOnClickOutside from './hooks/useOnClickOutside';

const DishForm = ({ setToggle }) => {

    const ref = useRef();

    useOnClickOutside(ref, () => setToggle(false));

    useBodyScrollLock();
    return (
        <div className="dish-card" ref={ref}>
            <form>
                <div className="form-row">
                <label htmlFor="name">Name:
                    <input type="text" id="name"/>
                </label>
                </div>
            </form>
        </div>
    )
}

export default DishForm;