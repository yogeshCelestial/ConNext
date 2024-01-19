"use client";
import React, { useState } from 'react'
import './write.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import SelectCategory from '../../components/SelectCategory';
import { Alert, AlertColor, Button, Paper, Snackbar } from '@mui/material';
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
    const [open, setOpen] = useState(false);
    const [severityStatus, setSeverityStatus] = useState('info');
    const [snackMessage, setSnackMessage] = useState('');
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const openSnackBar = (status: AlertColor, message: string) => {
        setSeverityStatus(status);
        setSnackMessage(message);
        setOpen(true);
    };

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

    const publishPost = async (publish: boolean) => {
        if (files?.[0] && title && content && category) {
            //upload image to edgestore server
            try {
                const res = await edgestore.publicFiles.upload({
                    file: files[0],
                    options: {
                        temporary: true,
                    },
                    onProgressChange: (progress) => {
                        // you can use this to show a progress bar
                        console.log(progress);
                    },
                });
                //upload post to database
                const data = {
                    title,
                    content,
                    image: res.url,
                    category,
                    published: publish,
                };
                const jsonData = JSON.stringify(data);
                const resp = await uploadPost(jsonData);
                if (resp === 200) {
                    await edgestore.publicFiles.confirmUpload({
                        url: res.url,
                    });
                    resetForm();
                    openSnackBar(publish ? 'success' : 'info', publish ? 'Post published successfully' : 'Saved to draft')
                } 
            } catch {
                openSnackBar('error', 'Something went wrong!')
            }
            
        } else {
            openSnackBar('warning', 'Please fill all fields');
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
                        <Button onClick={() => publishPost(false)} className='btn' id='btn2' variant="outlined">Save as draft</Button>
                        <Button onClick={() => publishPost(true)} className='btn' id='btn3' variant="contained" >Publish</Button>
                    </div>
                </div>
                <div className='rightPortion' >
                    <Paper elevation={1}>
                        <div className='inside'>
                            <SelectCategory category={category} setCategory={setCategory} />
                            <label className='fileLabel' htmlFor='file'>
                                Upload an Image:
                            </label>
                            <br />
                            <br />
                            <input onChange={(e) => setFiles(e.target.files)}
                                className='fileInput' type='file' accept='image/png, image/jpeg, image/jpg' id='file' />
                        </div>
                    </Paper>
                </div>
                <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={3000} onClose={handleClose}>
                    <Alert
                        onClose={handleClose}
                        severity={severityStatus}
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        {snackMessage}
                    </Alert>
                </Snackbar>
            </div>
        </>
    )
}

export default WritePost;