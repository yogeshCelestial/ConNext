'use client';
import React from 'react';
import Image from 'next/image';
import Logo from '../app/assets/logo.png'
import Link from 'next/link';
import './TopNav.css'
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '@mui/material';
import { Menu, MenuItem, Avatar } from '@mui/material';
import { IconButton } from '@mui/material';

const TopNav = () => {
    const { data: session, status } = useSession();
    const categories = ['india', 'food', 'travel', 'lifestyle', 'technology'];

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                                ? (
                                    <IconButton onClick={handleClick}>
                                        <Avatar alt={session.user?.name!} src={session.user?.image!} />
                                    </IconButton>)
                                : (<Button variant='text' className='write' onClick={() => signIn('google')} style={{ fontWeight: 700 }}>
                                    Login
                                </Button>)}
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}><Link href='/write'>Create Post</Link></MenuItem>
                                <MenuItem onClick={() => { signOut(); setAnchorEl(null); }}>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNav;