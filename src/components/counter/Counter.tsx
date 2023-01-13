import React, { useState } from 'react';
import styles from './Button.module.css'

interface Props {
}

const Counter: React.FC<Props> = () => {
    const [count, setCount] = useState(0);

    const [isHidden, setIsHidden] = useState(false);


    const increaseCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        setCount(count - 1);
    };

    const toggleVisibility = () => {
        setIsHidden(!isHidden);
    };

    return (
        <div className={styles.countercontainer}>
            {!isHidden && (
                <div className={styles.counter}>
                    <h1 >{count}</h1>
                    <button onClick={increaseCount}>+</button>
                    <button onClick={decreaseCount}>-</button>
                    <button onClick={toggleVisibility}>Hide/Show</button>
                </div>

            )}
            {isHidden && <button onClick={toggleVisibility}>Open</button>}
        </div>
    );
};

export default Counter;
