import React from 'react';
import './NotFound.css';
import NotFoundImage from '../app/assets/notFound.jpg'
import Image from 'next/image';


const NotFoundComponent = () => {
    return (
        <div className='mainCont'>
            <Image
                src={NotFoundImage}
                alt='Not Found'
                width={700}
                height={600}
            />
        </div>
    )
}

export default NotFoundComponent;