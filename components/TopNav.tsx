'use client';
import React from 'react';
import Image from 'next/image';
import Logo from '../app/assets/logo.png'
import Link from 'next/link';
import './TopNav.css'
import { signIn, useSession } from 'next-auth/react';
import { Button } from '@mui/material';

const TopNav = () => {
  const { data: session, status } = useSession();
  const categories = ['india', 'food', 'travel', 'lifestyle', 'technology'];
  return (
    <>
      <div className='navContainer'>
        <div className='topNav'>
          <div>
            <Link href='/'>
              <Image src={Logo} alt='ConNext' loading='lazy' height={40} width={160} />
            </Link>
          </div>
          <div className='linksContainer'>
            {categories.map((c, i) => (<Link key={i} className='navLink' href={`/categories/${c}`}>{c.toUpperCase()}</Link>))}
            <div className='navLinks'>
              {(status === 'authenticated')
                ? (<Image className='avatar' src={session.user?.image!} alt={session.user?.name!} height={40} width={40} />)
                : (<Button variant='text' className='write' onClick={() => signIn('google')} style={{ fontWeight: 700 }}>
                  Login
                </Button>)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopNav