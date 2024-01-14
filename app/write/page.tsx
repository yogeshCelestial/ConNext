"use client";
import React, { useState } from 'react'
import './write.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import SelectCategory from '../../components/SelectCategory';
import { Button, Paper } from '@mui/material';
import { useLayoutEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';


const WritePost = () => {
    const [value, setValue] = useState('');
    const { status } = useSession();
    useLayoutEffect(() => {
        if (status !== 'authenticated' && status !== 'loading') {
            signIn();
        }
    }, [status]);
    return (
        <>
            <div className='writeContainer'>
                <div className='leftPortion'>
                    <h3>Create/Update Blog Post</h3>
                    <div className='inputsHolder'>
                        <div>
                            <input className='titleInput' placeholder='Title of the Post' />
                        </div>
                        <h4>Summery</h4>
                        <ReactQuill theme="snow" value={value} onChange={setValue} />
                        <br />
                    </div>
                    <div className='buttonsContainer'>
                        <Button className='btn' id='btn1' variant="outlined">Reset</Button>
                        <Button className='btn' id='btn2' variant="outlined">Save as draft</Button>
                        <Button className='btn' id='btn3' variant="contained" >Publish</Button>
                    </div>
                </div>
                <div className='rightPortion' >
                    <Paper elevation={1}>
                        <div className='inside'>
                            <SelectCategory />
                            <label className='fileLabel' htmlFor='file'>
                                Paste an image Url:
                            </label>
                            <br />
                            <input className='fileInput' type='text' id='file' />
                            {/* <input className='fileInput' type='file' accept='image/png, image/jpeg, image/jpg' id='file' /> */}
                        </div>
                    </Paper>
                </div>
            </div>
        </>
    )
}

export default WritePost;