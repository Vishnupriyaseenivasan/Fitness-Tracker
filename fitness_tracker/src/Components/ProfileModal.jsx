import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import EditProfileModal from "./EditProfileModal";
import './ProfileModal.css';

const ProfileModal = () => {
  const [profile, setProfile] = useState({
    username: "John Doe",
    location: "New York",
    weight: 70,
    height: 175,
    age: 25,
    runningGoal: 5,
    sleepingGoal: 8,
    weightLossGoal: 2,
    schedule: [
      { activity: "Yoga Class", type: "Fitness", date: "22 Mar 2025" },
      { activity: "Swimming", type: "Fitness", date: "22 Mar 2025" },
    ],
  });

  // State to manage modal visibility
  const [showEditProfile, setShowEditProfile] = useState(false);

  const handleProfileUpdate = (updatedData) => {
    setProfile((prev) => ({
      ...prev,
      ...updatedData,
    }));
    setShowEditProfile(false); // Close modal after saving the profile
  };

  const handleCloseModal = () => {
    setShowEditProfile(false); // Close the modal
  };

  return (
    <div className="dashboard">
      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-header">
          <div className="profile-info">
            <div className="profile-icon">
              <FaUser />
            </div>
            <div>
              <h3>{profile.username}</h3>
              <p>{profile.location}</p>
            </div>
          </div>
          <button className="logout-button">⏻</button>
        </div>
        <div className="profile-progress d-flex">
          <div className="me-5">
            <h4 style={{ background: "lightgreen", borderRadius: "50%" }}>
              100%
            </h4>
            <p>Your Profile is Set</p>
          </div>

          <div>
            <button
              className="btn btn-success"
              onClick={() => setShowEditProfile(true)} // Show modal when clicked
            >
              Edit Your Profile
            </button>

            {/* Show modal if showEditProfile is true */}
            {showEditProfile && (
              <EditProfileModal
                profile={profile}
                onSave={handleProfileUpdate}
                onClose={handleCloseModal} // Pass the close function here
              />
            )}
          </div>
        </div>
        <div className="profile-stats">
          <div>
            <h3 className="fw-bold">{profile.weight}kg</h3>
            <p>Weight</p>
          </div>
          <div>
            <h3 className="fw-bold">{profile.height}cm</h3>
            <p>Height</p>
          </div>
          <div>
            <h3 className="fw-bold">{profile.age}yrs</h3>
            <p>Age</p>
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <div className="goals-section mt-5 mb-5">
        <h3 className="mt-2 fw-bold">Your Goals</h3>
        <div className="goal">
          <span>🏃‍♂️</span>
          <p>Running</p>
          <h4>{profile.runningGoal}Km</h4>
        </div>
        <div className="goal">
          <span>🛌</span>
          <p>Sleeping</p>
          <h4>{profile.sleepingGoal}hrs</h4>
        </div>
        <div className="goal">
          <span>🔥</span>
          <p>Weight Loss</p>
          <h4>{profile.weightLossGoal}kg</h4>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="schedule-section mt-3">
        <h3 className="text-dark fw-bold mb-2">Scheduled</h3>
        {profile.schedule.map((item, index) => (
          <div key={index} className="schedule">
            <div className="schedule-info">
              <h6>Training - {item.activity}</h6>
              <p>{item.type}</p>
            </div>
            <p className="schedule-date">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileModal;
