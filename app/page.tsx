'use client';
import Main from '@/components/Main';
import { useEffect, useState } from 'react';

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(false);
    const loadPosts = async () => {
        const response = await fetch('/api/post', {
            method: 'GET',
        });
        const data = await response.json();
        if (response?.status === 200 && data?.posts?.length) {
            setPosts(data?.posts);
            setLoading(false);
            setStatus(true);
        }
    };
    useEffect(() => {
        setLoading(true);
        loadPosts();
    }, []);

    return (
        <Main posts={posts} category='Trending' loading={loading} status={status} />
    );
}
