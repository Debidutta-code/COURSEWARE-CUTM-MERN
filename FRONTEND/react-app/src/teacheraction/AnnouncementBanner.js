// AnnouncementBanner.js
import React from 'react';
import '../styles/AnnouncementBanner.css'; // Import the new CSS file

const AnnouncementBanner = () => {
    const announcements = [
        'Faculty Meeting - January 15, 2023',
        'All Teachers Keep Track Of Your Modules And Assignments',
      ];

  return (
    <div className="announcement-banner">
      {announcements.length > 0 ? (
        <marquee behavior="scroll" direction="left" scrollamount="10">
          {announcements.map((announcement, index) => (
            <span key={index} className="announcement-text">
              Announcement {index+1} : {announcement}
            </span>
          ))}
        </marquee>
      ) : (
        <span className="announcement-banner">No announcements</span>
      )}
    </div>
  );
};

export default AnnouncementBanner;
