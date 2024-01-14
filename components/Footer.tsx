"use client";
import React, { useEffect, useState } from 'react';
import './Footer.css';
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const [cYear, setYear] = useState(2024);

    useEffect(() => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        setYear(year);
    }, []);

    return (
        <div className='footerContainer'>
            <div className='footer'>
                <div className='contactCont'>
                    <div className='firstDiv'>
                        <p>Contact Information</p>
                        <span className='addMe'>Add me on &nbsp; <a target='_blank' style={{ color: '#fff' }} href='https://www.linkedin.com/in/yogesh352/'><LinkedInIcon /></a></span>
                        <p>Address: C - 146, Sector 15, Gautam Buddha Nagar <br />201301, Noida, Uttar Pradesh</p>
                    </div>
                    <div className='secondDiv'>
                        <p>
                            Write Us
                        </p>
                        <div className='formCont'>
                            <input className='input' placeholder="Email" />
                            <textarea className='input' placeholder='Your Query...' />
                            <button className='sendButton' type='button'>Send</button>
                        </div>
                    </div>
                </div>
                <p className='madeBy'>{cYear} &copy; Yogesh Yaduvanshi : All Rights Reserved.</p>
                <p className='madeBy'>Visitor Counter: &nbsp; <a href="https://www.hitwebcounter.com" target="_blank">
                    <Image
                        className='counter'
                        src="https://hitwebcounter.com/counter/counter.php?page=10478624&style=0011&nbdigits=5&type=ip&initCount=0"
                        title="Counter Widget"
                        alt="Counter Wideget"
                        border="0"
                        height={16}
                        width={60}
                    />
                </a>
                </p>
            </div>
        </div>
    )
}

export default Footer;