'use client'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './page.module.css';
import Navigation from '../../components/Navigation/index.jsx';

export default function Home () {
  const navigate = useNavigate();
  const [selectedGuild, setSelectedGuild] = useState(null);

  const handleNextClick = () => {
    if (selectedGuild) {
      navigate('/upload');
    }
  };

  return (
    <div className={classes.area}>
      <Navigation />
      <h1 className={classes.heading}>PLEASE CHOOSE THE GUILD YOU BELONG TO</h1>
      <div className={classes.inputs}>
          <div className={classes.option}>
            <input type="radio" id='checkbox_one' name='checkbox' className={classes.checkbox} onChange={() => setSelectedGuild('AGN')} />
            <label htmlFor="checkbox_one"></label>
            <h2>ACTORS GUILD OF NIGERIA (AGN)</h2>
          </div>
          <div className={classes.option}>
            <input type="radio" id='checkbox_two' name='checkbox' className={classes.checkbox} onChange={() => setSelectedGuild('PGN')} />
            <label htmlFor="checkbox_two"></label>
            <h2>PROCEDURES GUILD OF NIGERIA (PGN)</h2>
          </div>
          <div className={classes.option}>
            <input type="radio" id='checkbox_three' name='checkbox' className={classes.checkbox} onChange={() => setSelectedGuild('DGN')} />
            <label htmlFor="checkbox_three"></label>
            <h2>DIRECTORS GUILD OF NIGERIA (DGN)</h2>
          </div>
          <div className={classes.note}>
            <p className={classes.para}>Please note: You can't proceed without being a member of any of the above GUILDS</p>
          </div>
          <button className={classes.button} onClick={handleNextClick} disabled={!selectedGuild}>NEXT</button>
      </div>
    </div>
  );
}