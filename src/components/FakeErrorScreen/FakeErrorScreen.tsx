import React from 'react';

import styles from './FakeErrorScreen.module.css';

const FakeErrorScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.errorHeader}>
        <h2 className={styles.errorMessage}>Portfolio Error Occured</h2>
      </div>
      <div
        className={styles.errorContent}
        style={{ height: '60vh', overflow: 'scroll' }}
      >
        <p>./src/pages/portfolio.tsx</p>
        <br></br>
        <p style={{ fontWeight: 'bold' }}>
          Error: This portfolio is putting me to sleep! Please add something
          exciting before I pass out."
        </p>
        <br></br>
        <p>
          Caused by:<br></br>
          <br></br> Our overworked millennial is combing through thousands of
          lines of code to figure out what's wrong, but it's not really working.
          <br></br>
          <br></br> This webpage is fighting for its life , it's probably
          overloaded from all the refactoring I haven't done.<br></br>
          <br></br> We tried running it again and again, but it's still not
          working.<br></br>
          <br></br> Just kidding, but seriously a boring portfolio is not what I
          do.<br></br>
          <br></br>./src/pages/portfolio.tsx
        </p>
      </div>
      <div className={styles.footer}>
        <p>
          <br></br>This is a fake error screen, dont worry. To fix the error,
          please wait 5 seconds and see what happens.
        </p>
      </div>
    </div>
  );
};

export default FakeErrorScreen;
