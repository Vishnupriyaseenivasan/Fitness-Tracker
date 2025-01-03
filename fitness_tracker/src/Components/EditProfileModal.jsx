import React, { useState } from "react";
import "./EditProfileModal.css";

const EditProfileModal = ({ profile, onSave, onClose }) => {
  const [activeTab, setActiveTab] = useState("personal"); // Manage active tab
  const [personalInfo, setPersonalInfo] = useState({
    fullName: profile.username,
    location: profile.location,
    dob: "",
    height: profile.height,
    weight: profile.weight,
  });

  const [goals, setGoals] = useState({
    stepsPerDay: "",
    runningPerDay: profile.runningGoal,
    sleepPerDay: profile.sleepingGoal,
    targetWeight: profile.weightLossGoal,
    waterPerDay: "",
  });

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleGoalsChange = (e) => {
    const { name, value } = e.target;
    setGoals({ ...goals, [name]: value });
  };

  const handleSave = () => {
    onSave({
      ...personalInfo,
      ...goals,
    });
    onClose(); // Close the modal after saving
  };

  const handleTabSwitch = (tab) => {
    setActiveTab(tab); // Switch tabs dynamically
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button> {/* Close button triggers onClose */}
        <h2>Edit Profile</h2>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={activeTab === "personal" ? "active" : ""}
            onClick={() => handleTabSwitch("personal")}
          >
            Personal Information
          </button>
          <button
            className={activeTab === "goals" ? "active" : ""}
            onClick={() => handleTabSwitch("goals")}
          >
            Set Your Goals
          </button>
        </div>

        {/* Personal Information Tab */}
        {activeTab === "personal" && (
          <div className="form">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={personalInfo.fullName}
              onChange={handlePersonalInfoChange}
            />
            <input
              type="text"
              name="location"
              placeholder="Your Location"
              value={personalInfo.location}
              onChange={handlePersonalInfoChange}
            />
            <input
              type="date"
              name="dob"
              value={personalInfo.dob}
              onChange={handlePersonalInfoChange}
            />
            <input
              type="number"
              name="height"
              placeholder="Your Height in cm"
              value={personalInfo.height}
              onChange={handlePersonalInfoChange}
            />
            <input
              type="number"
              name="weight"
              placeholder="Your Weight in kg"
              value={personalInfo.weight}
              onChange={handlePersonalInfoChange}
            />
          </div>
        )}

        {/* Set Your Goals Tab */}
        {activeTab === "goals" && (
          <div className="form">
            <input
              type="number"
              name="stepsPerDay"
              placeholder="Steps per day"
              value={goals.stepsPerDay}
              onChange={handleGoalsChange}
            />
            <input
              type="number"
              name="runningPerDay"
              placeholder="Running per day in km"
              value={goals.runningPerDay}
              onChange={handleGoalsChange}
            />
            <input
              type="number"
              name="sleepPerDay"
              placeholder="Sleep per day in hours"
              value={goals.sleepPerDay}
              onChange={handleGoalsChange}
            />
            <input
              type="number"
              name="targetWeight"
              placeholder="Target weight in kg"
              value={goals.targetWeight}
              onChange={handleGoalsChange}
            />
            <input
              type="number"
              name="waterPerDay"
              placeholder="Water intake in Liters per day"
              value={goals.waterPerDay}
              onChange={handleGoalsChange}
            />
          </div>
        )}

        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfileModal;
