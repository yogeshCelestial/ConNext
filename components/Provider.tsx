'use client';
import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

interface Props {
    children: ReactNode
}

const Provider = (props: Props) => {
    const { children } = props;
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default Provider;
