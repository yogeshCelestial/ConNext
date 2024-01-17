import { SnglPost } from '@/app/post/[postId]/page';
import './Main.css';
import Image from 'next/image';
import Link from 'next/link';
import Loader from './Loader';

const Main = ({ posts, category, loading }: { posts: SnglPost[], category: string, loading: boolean }) => {
    console.log(posts, category);
    return (
        <>
            <h1 className='mainHeading'>{category}</h1>
            <div className='main'>
                {/* <h1 className='mainHeading'>{category}</h1> */}
                <div className='container'>
                    {!loading ? posts.map((post: SnglPost) => (<div key={post.id} className='post'>
                        <div className='imageContainer'>
                            <Image className='imageClass' loading='lazy' src={post.image} alt='image' width={300} height={400} />
                        </div>
                        <div className='contentContainer'>
                            <Link href={`/post/${post.id}`}>
                                <h2>{post.title}</h2>
                            </Link>
                            <div className="contentData" dangerouslySetInnerHTML={{ __html: post.content }} />
                            <button type='button'>Read More</button>
                        </div>
                    </div>)) : <Loader />}
                </div>
            </div>
        </>

    )
}

export default Main;