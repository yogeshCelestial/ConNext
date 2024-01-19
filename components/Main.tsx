import { SnglPost } from '@/app/post/[postId]/page';
import './Main.css';
import Image from 'next/image';
import Link from 'next/link';
import Loader from './Loader';
import { Typography } from '@mui/material';

const Main = ({ posts, category, loading, status }: { posts: SnglPost[], category: string, loading: boolean, status: boolean }) => {
    return (
        <>
            <h1 className='mainHeading'>{category.toUpperCase()}</h1>
            {!loading ?
                (<div className='main'>
                    {/* <h1 className='mainHeading'>{category}</h1> */}
                    <div className='container'>
                        {posts.map((post: SnglPost) => (<div key={post.id} className='post'>
                            <div className='imageContainer'>
                                <Image className='imageClass' loading='lazy' src={post.image} alt='image' width={300} height={400} />
                            </div>
                            <div className='contentContainer'>
                                <Link href={`/post/${post.id}`}>
                                    <h2>{post.title}</h2>
                                </Link>
                                <div className="contentData" dangerouslySetInnerHTML={{ __html: post.content.substring(0, 700) + '...' }} />
                                <Link href={`/post/${post.id}`}>
                                    <button type='button'>Read More</button>
                                </Link>
                            </div>
                        </div>))}
                        {posts?.length === 0 && !loading && status && (
                            <Typography variant='h4'>No Related Post Avaiable.</Typography>
                        )}
                    </div>
                </div>) : <Loader /> }
        </>

    )
}

export default Main;