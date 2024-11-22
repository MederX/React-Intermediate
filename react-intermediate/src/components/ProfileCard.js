import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, image, description }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={name} />
      <div className="profile-card-content">
        <h2 className="profile-card-name">{name}</h2>
        <p className="profile-card-description">{description}</p>
        <a href="#!" className="profile-card-button">
          Follow
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
