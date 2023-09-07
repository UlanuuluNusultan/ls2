import React, { useState, useEffect } from 'react';

const Main = ({ onClose }) => {
    const [main, setMain] = useState(0);
    const [displayText, setDisplayText] = useState("");

    const handleAdd = (amount) => {
        setMain(main + amount);
        setDisplayText(""); 
    };

    const handleSubtract = (amount) => {
    
        if (main - amount >= 0) {
            setMain(main - amount);
            setDisplayText(``);
        } else {
            setDisplayText("алуу мумкун эмес");
        }
    };

    const handleDivide = (amount) => {

        if (main / amount >= 1) {
            setMain(main / amount);
            setDisplayText(``);
        } else {
            setDisplayText("болуу мумкун эмес");
        }
    };

    const handleMultiply = (amount) => {
        if (main * amount >= 1) {
            setMain(main * amount);
            setDisplayText(`` ); 
        }   else{
            setDisplayText("кой 0 го кобойтулбойт")
        }

    };

    const handleReset = () => {
        setMain(0);
        setDisplayText(""); 
    };

    useEffect(() => {
        let timeoutId; 
        const clearDisplayText = () => {
            timeoutId = setTimeout(() => {
                setDisplayText("");
            }, 3000); 
        };
        clearTimeout(timeoutId);

        clearDisplayText();

        return () => {
            clearTimeout(timeoutId);
        };
    }, [displayText]);

    return (
        <div>
            <main>
                <div className="container">
                    <div className="main">
                        <div className="content">
                            <div className='text'>
                                <h1>Result <span>{main}</span></h1>
                                <p>{displayText}</p>
                            </div>
                            <div className="btn">
                                <button className='butt' onClick={() => handleAdd(10)}>+10</button>
                                <button className='butt' onClick={() => handleSubtract(5)}>-5</button>
                                <button className='butt' onClick={() => handleDivide(2)}>÷2</button>
                                <button className='butt' onClick={() => handleMultiply(3)}>×3</button>
                                <button className='butt' onClick={handleReset}>Reset</button>
                                <button className='btn1' onClick={onClose}>На главную</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Main;
