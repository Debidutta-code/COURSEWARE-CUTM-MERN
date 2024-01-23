// AnnouncementBanner.js

import React from 'react';

const AnnouncementBanner = () => {
  // Replace the placeholder announcement with your actual announcement content
  const announcement = 'Welcome to the Teacher Dashboard!';

  return (
    <div className="announcement-banner">
      <marquee behavior="scroll" direction="left" scrollamount="4">
        <span>{announcement}</span>
      </marquee>
    </div>
  );
};

export default AnnouncementBanner;
