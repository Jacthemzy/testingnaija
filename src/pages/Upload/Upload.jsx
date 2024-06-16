'use client'

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './index.module.css';
import Navigation from '../../components/Navigation/index.jsx';

export default function Upload() {

    const [file, setFile] = useState(null);
    const [showDialog, setShowDialog] = useState(false);
    const fileInputRef = React.useRef();
    const navigate = useNavigate();
    

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleNextClick = () => {
        if (!file) {
            setShowDialog(true);
            return;
        }

        if (file) {
            navigate('/success');
        }
      };

      const closeDialog = () => {
        setShowDialog(false);
    };

    return (
        <div className={classes.area}>
            <a href='/'>
                <Navigation />
            </a>
            <h1 className={classes.heading}>Please upload your GUILD's ID</h1>
            <div className={classes.content}>
                <div className={classes.left}>
                    <div className={classes.top}>
                        <h2>You can see your ID or upload a JPEG</h2>
                    </div>
                    <div className={classes.bottom}>
                        <h2>All ID MUST INCLUDE THE FOLLOWING</h2>
                        <h2>1. Your full name as inputed on the sign up forn</h2>
                        <h2>2. Identify confirmation guild</h2>
                        <h2>3. Must be uyp to current date</h2>
                    </div>
                </div>
                <div className={classes.right}>
                    <div className={classes.upload_box}>
                        <input type="file" id="file" className={classes.upload_input} style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange} />
                        <h2>Click to <span onClick={handleUploadClick}>Upload</span> or DRAG here</h2>
                    </div>
                </div>
            </div>
            <button onClick={handleNextClick} className={classes.button}>PROCESS</button>
            {showDialog && (
                <>
                <div className={classes.overlay}></div>
                <div className={`${classes.dialog} ${showDialog ? '' : classes.closing}`}>
                    <h2>VERIFICATIOB ERROR</h2>
                    <h2>PLEASE reUPLOAD ID</h2>
                    <button className={classes.button_two} onClick={closeDialog} >OKAY</button>
                </div>
                </>
            )}
        </div>
    );
}