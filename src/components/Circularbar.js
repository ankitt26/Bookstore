import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from '../CSS/Circularbar.module.css';

const CircularProgressBar = () => {
  let value = 50;
  value = Math.floor(Math.random() * 81);
  return (
    <main className={styles.progressDiv}>
      <div className={styles.progressBarWrapper}>
        <CircularProgressbar
          value={value}
          // text={`${value}%`}
          className={styles.progressBar}
        />
      </div>
      <div>
        <span className={styles.percent}>
          {value}
          {' '}
          %
        </span>
        <br />
        <span className={styles.completed}>Completed</span>
      </div>
    </main>

  );
};

export default CircularProgressBar;
