import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/jordanpacheco1.png" alt="Jordan Pacheco"/>
      <div>
        <strong>Jordan Pacheco</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}