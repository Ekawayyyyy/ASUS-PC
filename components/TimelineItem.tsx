'use client';
import React, { ReactNode } from 'react';
import styles from '../styles/experience.module.scss';

interface TimelineItemProps {
  title: string;
  company: string;
  date: string;
  description: ReactNode;
}



const TimelineItem: React.FC<TimelineItemProps> = ({ title, company, date, description }) => {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineIndicator}></div>
      <div className={styles.timelineContent}>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p>{date}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
