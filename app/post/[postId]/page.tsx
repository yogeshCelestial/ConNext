/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import './singlePost.css';
import Paper from '@mui/material/Paper';
import CardComp from '../../../components/Card';
import { Grid } from '@mui/material';
import Loader from '@/components/Loader';

export interface SnglPost {
    id: string,
    title: string,
    content: string,
    image: string,
    createdAt: string,
}
const SinglePost = () => {
    const params = useParams();
    const [singlePost, setSinglePost] = useState<SnglPost>();
    const [postedTime, setPostedTime] = useState(0.5);
    const [currentCat, setCurrentCat] = useState('');
    const [specificPosts, setSpecificPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { postId } = params;
    const getSinglePost = async () => {
        const response = await fetch(`/api/post/${postId}`, {
            method: 'GET',
        });
        const postData = await response.json();
        setSinglePost(postData?.post)
        setCurrentCat(postData?.post?.category);
        setLoading(false);
    };

    // get category specific posts
    const getSpecificPosts = async () => {
        const response = await fetch(`/api/post/category/${currentCat}?take=3`, {
            method: 'GET',
        });
        const data = await response.json();
        setSpecificPosts(data?.posts)
    };

    useEffect(() => {
        setLoading(true);
        getSinglePost();
    }, [postId]);

    useEffect(() => {
        if (currentCat) {
            getSpecificPosts();
        }
    }, [currentCat]);

    useEffect(() => {
        const currentDate = new Date();
        const convertedDate = new Date(singlePost?.createdAt || '');
        // Calculate the difference in milliseconds
        const timeDifference: number = currentDate.getTime() - convertedDate.getTime();

        // Convert the time difference to days
        const daysAgo: number = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        setPostedTime(daysAgo);
    }, [singlePost]);

    return (
        <div className='single'>
            {(!loading) ?
                (<><div className='content'>
                    <Image className='postImage' loading='lazy' src={singlePost?.image || ''} alt='post' height={400} width={500} />
                    <div className='userDiv'>
                        <div className='info'>
                            {postedTime !== 0.5 && (
                                <p>Posted {postedTime === 0 ? ' today' : (postedTime === 1) ? postedTime + ' day ago' : postedTime + ' days ago'}</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <h1>{singlePost?.title}</h1>
                        <div className="description" dangerouslySetInnerHTML={{ __html: singlePost?.content || '' }}></div>
                    </div>
                </div><div className='menu'>
                    <h3>Other posts you may interested in</h3>
                    <div>
                        <Paper elevation={1}>
                            {specificPosts?.length > 1
                                    && specificPosts.map((cardPost: SnglPost) => (
                                        cardPost?.id !== singlePost?.id &&
                                        <Grid key={cardPost.id}>
                                            <CardComp id={cardPost.id} image={cardPost?.image} title={cardPost.title} />
                                        </Grid>
                                    )
                                    )
                            }
                        </Paper>
                    </div>

                </div></>) : (<Loader />)}

        </div>
    )
}

export default SinglePost;