import React, { useState } from 'react';
import logo from '../../../public/qq.png';
import '../../App.css';
import Main from '../main/Main'; 


const Header = () => {
    const [openMain, setOpenMain] = useState(false);

    const form = (e) => {
        setOpenMain(!openMain);
        e.preventDefault();
    }

    const closeMain = () => {
        setOpenMain(false);
    }

    return (
        <div>
            <header>
                <div className='container'>
                    <div>
                        {openMain ? null : <img src={logo} alt='' />}
                    </div>
                    <nav>
                        {openMain ? (
                            <Main onClose={closeMain} />
                        ) : (
                            <div className='menu-items'>
                                <a href="">Home</a>
                                <a href="">About</a>
                                <a href="" onClick={form}>Calculator</a>
                            </div>
                        )}
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Header;

