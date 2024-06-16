'use client'

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './register.module.css';
import Navigation from '../../components/Navigation/index.jsx';

export default function Register() {
    const navigate = useNavigate();

    const [holder, setHolder] = useState('');
    const [bank, setBank] = useState('');
    const [account, setAccount] = useState('');

    const handleNextClick = () => {
        if (holder && bank && account) {
            navigate('/success-register');
        } else {
            alert('Please fill all fields before proceeding.');
        }
    }

    return (
        <div className={classes.area}>
            <a href='/success'>
                <Navigation />
            </a>
            <div className={classes.content}>
                <h1>PLEASE INPUT YOUR ACCOUNT DETAILS</h1>
                <div className={classes.inputs}>
                    <div className={classes.input}>
                        <label htmlFor="holder">Account Holder</label>
                        <input type="text" id="holder" required value={holder} onChange={e => setHolder(e.target.value)} />
                    </div>
                    <div className={classes.input}>
                        <label htmlFor="bank">Bank Name</label>
                        <input type="text" id="bank" required value={bank} onChange={e => setBank(e.target.value)} />
                    </div>
                    <div className={classes.input}>
                        <label htmlFor="account">Account Number</label>
                        <input type="text" id="account" required value={account} onChange={e => setAccount(e.target.value)} />
                    </div>
                </div>
                <button className={classes.button} onClick={handleNextClick}>NEXT</button> 
            </div>
        </div>
    );
};