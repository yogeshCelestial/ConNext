'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../app/assets/logo.png'
import Link from 'next/link';
import './TopNav.css'

const TopNav = () => {
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
            <Link href='/write' className='write' style={{ fontWeight: 700 }}>
              Write
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default TopNav