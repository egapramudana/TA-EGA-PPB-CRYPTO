import React from 'react';
import image from "../images/ega.jpeg";

const Profil = () => {
  const userName = 'Ega Pramudana Ali';
  const nim = '21120121130072';
  const profileImage = image;

  const styles = `
  body {
    margin: 0;
    padding: 0;
  }

  .profile-page {
    text-align: center;
    padding: 20px;
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .profile-picture-container {
    border-radius: 15px;
    box-shadow: 0px 0px 20px #ffffff9e;
    width: 60%; /* Sesuaikan lebar card sesuai kebutuhan */
    margin: 0 auto; /* Untuk memusatkan card */
    overflow: hidden;
    transition: transform 0.3s; /* Add smooth transition for zoom effect */
  }
  
  .profile-picture {
    width: 100%; /* Mengisi lebar card secara penuh */
    height: 100%;
    border-radius: 15px;
    box-shadow: 0px 0px 20px #ffffff9e;
    transition: transform 0.3s; /* Add smooth transition for zoom effect */
  }

  .profile-picture-container:hover,
  .profile-picture:hover {
    transform: scale(1.1); /* Add zoom effect on hover */
  }

  .user-info-container {
    margin-top: 20px;
  }

  .user-name {
    font-weight: bold;
    font-size: 1.5em;
    font-family: 'Poppins', sans-serif;
  }

  .nim {
    font-size: 1.5em;
    margin-top: 10px;
    font-family: 'Poppins', sans-serif;
  }

  h2 {
    margin-top: 20px; /* Add margin to the top of the heading */
    margin-bottom: 20px; /* Add margin to the bottom of the heading */
  }
`;

  const styleSheet = document.createElement('style');
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  return (
    <div className="profile-page">
        <h2>My Profile</h2>
      <div className="profile-container">
        <div className="profile-picture-container">
          <img src={profileImage} alt="Profile" className="profile-picture" />
        </div>
      </div>
      <div className="user-info-container">
        <p className="user-name">{userName}</p>
        <p className="nim">{nim}</p>
      </div>
    </div>
  );
};

export default Profil;
