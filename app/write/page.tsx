"use client";
import React, { useState } from 'react'
import './write.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import SelectCategory from '../../components/SelectCategory';
import { Paper } from '@mui/material';


const WritePost = () => {
    const [value, setValue] = useState('');
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
                        <button className='btn' id='btn1' variant="text">Reset</button>
                        <button className='btn' id='btn2' variant="outlined">Save as draft</button>
                        <button className='btn' id='btn3' variant="contained" >Publish</button>
                    </div>
                </div>
                <div className='rightPortion' >
                    <Paper elevation={1}>
                        <div className='inside'>
                            <SelectCategory />
                            <label className='fileLabel' htmlFor='file'>
                                Upload Image
                            </label>
                            <br />
                            <input className='fileInput' type='file' accept='image/png, image/jpeg, image/jpg' id='file' />
                        </div>
                    </Paper>
                </div>
            </div>
        </>
    )
}

export default WritePost;