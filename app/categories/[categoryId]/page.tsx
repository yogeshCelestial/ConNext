/* eslint-disable max-len */
import React from 'react';
import Main from '@/components/Main';
import { notFound } from 'next/navigation';

const SpecificCategory = ({ params }: { params: { categoryId: string } }) => {
    const categories = ['india', 'food', 'travel', 'lifestyle', 'technology'];
    if (!categories.includes(params?.categoryId)) {
        notFound();
    }

    return (
        <div>
            {/* <Main posts={posts} category={(params?.categoryId).toUpperCase()} /> */}
        </div>
    )
}

export default SpecificCategory;