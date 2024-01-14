"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './singlePost.css';
import Paper from '@mui/material/Paper';
import CardComp from '../../../components/Card';
import Link from 'next/link';
import { Avatar } from '@mui/material';
import { useSession } from 'next-auth/react';

export interface SnglPost {
  id: string,
  title: string,
  content: string,
  image: string,
  createdAt: string,
}
const SinglePost = () => {
    const params = useParams();
    const { data: session } = useSession();
    const [singlePost, setSinglePost] = useState<SnglPost>();
    const [postedTime, setPostedTime] = useState(NaN);
    const { postId } = params;
    const getSinglePost = async () => {
        const response = await fetch(`/api/post/${postId}`, {
            method: 'GET',
        });
        const postData = await response.json();
        setSinglePost(postData?.post)
    }

    useEffect(() => {
        getSinglePost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postId]);

    useEffect(() => {
        const currentDate = new Date();
        const convertedDate = new Date(singlePost?.createdAt!);
        // Calculate the difference in milliseconds
        const timeDifference: number = currentDate.getTime() - convertedDate.getTime();

        // Convert the time difference to days
        const daysAgo: number = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        setPostedTime(daysAgo);
    }, [singlePost]);

    return (
        <div className='single'>
            <div className='content'>
                {/* <Image className='postImage' loading='lazy' src={singlePost?.image!} alt='post' height={400} width={500} /> */}
                <div className='userDiv'>
                    <Avatar alt={session?.user?.name!} src={session?.user?.image!} />
                    <div className='info'>
                        <span>Yogesh</span>
                        <p>Posted {postedTime === 0 ? 'today' : (postedTime === 1) ? 'day ago' : 'days ago'}</p>
                    </div>
                    <Link href='/write'><EditIcon /></Link>
                    <DeleteOutlineIcon />
                </div>
                <div>
                    <h1>{singlePost?.title}</h1>
                    <div className="description" dangerouslySetInnerHTML={{__html: singlePost?.content!}}></div>
                </div>
            </div>
            <div className='menu'>
                <h3>Other posts you may interested in</h3>
                <div>
                    <Paper elevation={1} >
                        <CardComp />
                        <hr />
                        <CardComp />
                        <hr />
                        <CardComp />
                    </Paper>
                </div>

            </div>

        </div>
    )
}

export default SinglePost;