/* eslint-disable max-len */
'use client';
import React, { useEffect, useState } from 'react';
// import Main from '@/components/Main';
import { notFound } from 'next/navigation';
import Main from '@/components/Main';

const SpecificCategory = ({ params }: { params: { categoryId: string } }) => {
    const categories = ['india', 'food', 'travel', 'lifestyle', 'technology'];
    const[loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [status, setStatus] = useState(false);
    if (!categories.includes(params?.categoryId)) {
        notFound();
    }

    const getCategoryPosts = async (category: string) => {
        const response = await fetch(`/api/post/category/${category}`, {
            method: 'GET',
        });
        const data = await response.json();
        if(response.status === 200) {
            setPosts(data.posts);
            setLoading(false);
            setStatus(true);
        }
        
    }
    useEffect(() => {
        setLoading(true);
        getCategoryPosts(params.categoryId);
    }, [params.categoryId]);

    return (
        <div>
            <Main posts={posts} category={(params?.categoryId).toUpperCase()} loading={loading} status={status} />
        </div>
    )
}

export default SpecificCategory;