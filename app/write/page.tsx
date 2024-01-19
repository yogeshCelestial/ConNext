"use client";
import React, { useState } from 'react'
import './write.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import SelectCategory from '../../components/SelectCategory';
import { Button, Paper } from '@mui/material';
import { useLayoutEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useEdgeStore } from '../../lib/edgestore';


const WritePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [files, setFiles] = useState<File[]>([]);
    const { status } = useSession();
    const { edgestore } = useEdgeStore();

    useLayoutEffect(() => {
        if (status !== 'authenticated' && status !== 'loading') {
            signIn();
        }
    }, [status]);

    const resetForm = () => {
        setTitle('');
        setContent('');
        setCategory('');
        setFiles([]);
    };

    const saveAsDraft = () => console.log('saved as draft');

    const uploadPost = async (jsonData: string) => {
        const response = await fetch('/api/post', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: jsonData,
        });
        const data = await response.json();
        return data.status;
    }

    const publishPost = async () => {
        if (files?.[0] && title && content && category) {
            const res = await edgestore.publicFiles.upload({
                file: files[0],
                onProgressChange: (progress) => {
                    // you can use this to show a progress bar
                    console.log(progress);
                },
            });
            // you can run some server action or api here
            // to add the necessary data to your database
            const data = {
                title,
                content,
                image: res.url,
                category,
                published: true,
            };
            const jsonData = JSON.stringify(data);
            const resp = await uploadPost(jsonData);
            if (resp === 200) {
                resetForm();
            }
        }
        
    }

    return (
        <>
            <div className='writeContainer'>
                <div className='leftPortion'>
                    <h3>Create/Update Blog Post</h3>
                    <div className='inputsHolder'>
                        <div>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} className='titleInput' placeholder='Title of the Post' />
                        </div>
                        <h4>Summery</h4>
                        <ReactQuill theme="snow" value={content} onChange={setContent} />
                        <br />
                    </div>
                    <div className='buttonsContainer'>
                        <Button onClick={resetForm} className='btn' id='btn1' variant="outlined">Reset</Button>
                        <Button onClick={saveAsDraft} className='btn' id='btn2' variant="outlined">Save as draft</Button>
                        <Button onClick={publishPost} className='btn' id='btn3' variant="contained" >Publish</Button>
                    </div>
                </div>
                <div className='rightPortion' >
                    <Paper elevation={1}>
                        <div className='inside'>
                            <SelectCategory category={category} setCategory={setCategory} />
                            <label className='fileLabel' htmlFor='file'>
                                Paste an image Url:
                            </label>
                            <br />
                            <input onChange={(e) => setFiles(e.target.files)}
                                className='fileInput' type='file' accept='image/png, image/jpeg, image/jpg' id='file' />
                        </div>
                    </Paper>
                </div>
            </div>
        </>
    )
}

export default WritePost;