import React, { useEffect, useState } from 'react'


// import Logo from './Images'


const Navbar= () =>{
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 150 ? setSticky (true) : setSticky(false);

        })
    }, []);

    return (
        <nav className={`Nav ${sticky? 'dark-nav' : ''}`}>
            <img  src='/Images/study.jpg' alt="" className='logo'/>
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className='btn'     >Contact us </button></li>
            </ul>
        </nav >
    )
}
export default Navbar