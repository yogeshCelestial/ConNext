"use client";
import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './singlePost.css';
import Paper from '@mui/material/Paper';
import CardComp from '../../../components/Card';
import Link from 'next/link';

const SinglePost = () => {
  const params = useParams();
  const { postId } = params;
  return (
    <div className='single'>
      <div className='content'>
        <Image className='postImage' loading='lazy' src="https://picsum.photos/400/600/" alt='post' height={400} width={500} />
        <div className='userDiv'>
          <Image loading='lazy' className='user' src='https://picsum.photos/50/50/' alt='user' height={50} width={50} />
          <div className='info'>
            <span>Yogesh</span>
            <p>Posted 2 days ago</p>
          </div>
          <Link href='/write'><EditIcon /></Link>
          <DeleteOutlineIcon />
        </div>
        <div>
          <h1>This is the title of the Blog Post in the Single Page</h1>
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed tincidunt, velit sit amet hendrerit vulputate, lacus felis
            hendrerit urna, id sagittis dolor quam eu nisi. In fermentum,
            tortor quis ultrices varius, mauris lacus elementum nunc, quis
            faucibus metus quam vel sem. Morbi eu tincidunt dolor. Duis vel
            fringilla tortor, sit amet convallis libero. Fusce in felis
            a ex ultricies pellentesque vel vel ligula. Suspendisse potenti
            Proin vitae vestibulum odio. Ut auctor velit vel lacus
            pellentesque, eget facilisis dolor auctor.
            Vestibulum tincidunt libero sit amet urna sodales, in feugiat justo malesuada.
            Praesent euismod, enim et auctor tincidunt, orci dui hendrerit justo,
            vitae lacinia leo quam eu neque. Sed semper felis ac odio fermentum,
            ut dignissim tortor pulvinar. Quisque eget turpis eu justo accumsan ultricies.
            Nullam luctus justo id feugiat eleifend. Integer vel mi vitae leo
            imperdiet fermentum at quis justo. Curabitur quis turpis nec felis dapibus malesuada.
            Fusce bibendum semper tortor, a tincidunt nunc fermentum nec.
            Curabitur dapibus, odio nec scelerisque congue, quam nunc bibendum lectus,
            id dictum mauris orci ut odio. Aliquam id aliquet odio. Ut tristique,
            quam ut volutpat congue, erat justo hendrerit nulla, sit amet dictum ex nulla eget libero.
            Vestibulum nec justo eget ligula feugiat rhoncus. Etiam euismod accumsan est.
            Integer vel augue vel est gravida ultrices. Sed in leo id urna cursus congue eget vitae libero.
            Vivamus in enim eu justo iaculis finibus. Integer consectetur urna in neque malesuada efficitur.
            Suspendisse potenti. Phasellus ullamcorper, tortor nec tristique hendrerit, velit tellus euismod eros,
            a varius mi dolor nec nisi.</p>
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