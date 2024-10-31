'use client';
import React, { ReactNode } from 'react';
import styles from '../styles/experience.module.scss';
// import Image from 'next/image';

interface TimelineItemProps {
  title: string;
  company: string;
  date: string;
  description: ReactNode;
  // imageUrl: string;
}



const TimelineItem: React.FC<TimelineItemProps> = ({ title, company, date, description,  }) => {
  return (
    <div className={styles.timelineItem}>
      {/* <Image
          src={imageUrl}
          alt={title}
          width={400} // Tentukan lebar gambar
          height={800} // Tentukan tinggi gambar
          className="w-50 h-50 object-cover rounded-t-lg center"
        /> */}
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
