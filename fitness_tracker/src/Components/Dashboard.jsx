import React, { useState } from "react";
import { FaHome, FaHeartbeat, FaChartBar, FaUser } from "react-icons/fa";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import Header from "./ProfileModal";
import Activity from "./Activity";
import ProgressChart from "./ProgressChart";
import Trainers from "./Trainers";
import trainer1 from '../images/trainer.jpg';
import trainer2 from '../images/trainer 1.jpg';
import trainer3 from '../images/trainers2.jpg';
import trainer4 from '../images/trainer3.jpg';
import Schedule from "./Schedule";
import Avocado from '../images/Avocada.jpg';
import Bluberry from '../images/blueberry.jpg';
import ProfileModal from "./ProfileModal";



const Dashboard = () => {
   
     const [userData, setUserData] = useState({
       steps: 3500,
       water: 1.5,
       calories: 1400,
       heartRate: 70,
       goals: {
         steps: 5000,
         water: 2, // in liters
         calories: 2000,
         heartRate: 75,
       },
     });
     const trainers = [
      {
        image: trainer1, // Replace with your banner URL
        profilePicture: trainer3, // Replace with your profile picture URL
        name: "Cameron Williamson",
        title: "Fitness Specialist",
        badgeCount: 25,
        starCount: 104,
      },
      {
        image: trainer2, // Replace with your banner URL
        profilePicture: trainer4, // Replace with your profile picture URL
        name: "Cameron Williamson",
        title: "Fitness Specialist",
        badgeCount: 25,
        starCount: 104,
      },
    ];

    const breakfast = {
      title: 'Avocado salad',
      image: Avocado,
      nutrients: {
        carbs: 30,
        protein: 56,
        fat: 36,
      },
    };
  
    const blueberry = {
      title: 'Blueberry',
      image: Bluberry,
      nutrients: {
        carbs: 34,
        protein: 66,
        fat: 44,
      },
    };
  return (
    <div className="dashboard-container ">
      <div className="d-flex">
      <div>
      <Sidebar/>
      </div>
      <div>
      <header className="dashboard-header d-flex">
        <div>
        <h6 className="mt-4">Good Morning</h6>
        <h1 className="text-dark fw-bold fs-3">Welcome Back 🎉</h1>
        </div>
        <div>
          <button type="button" style={{margin:"10px 80px 0px 450px"}}>Subscribe</button>
        </div>
      </header>
      <main>
        <div className="stats-grid ms-2 me-2">
          <div className="stat-card-step">
            <h3 className="mt-2 text-light">🏃‍♂️ Steps</h3>
            <p className="text-light">
              {userData.steps} / {userData.goals.steps}
            </p>
          </div>
          <div className="stat-card-water">
            <h3 className="mt-2 text-light"><i class="bi bi-droplet-fill me-1" style={{color:'lightblue'}}></i>Water</h3>
            <p className="text-light">
              {userData.water}L / {userData.goals.water}L
            </p>
          </div>
          <div className="stat-card-calories">
            <h3 className="mt-2 text-light"><i class="bi bi-droplet-fill me-1 "></i>Calories</h3>
            <p className="text-light">
              {userData.calories} / {userData.goals.calories}
            </p>
          </div>
          <div className="stat-card-heart">
            <h3 className="mt-2 text-light"><FaHeartbeat className="text-light" /> Heart Rate</h3>
            <p className="text-light">{userData.heartRate} bpm</p>
          </div>
        </div>
        <div className="d-flex">
        <div >
        <Activity></Activity>
        </div>
        <div>
          <ProgressChart></ProgressChart>
        </div>
        </div>
        <div className="d-flex">
        <div>
      <h3 className="ms-3 fw-bold fs-5">Recommended Trainer for you</h3>
      <div className="row ms-1" style={{width:'550px'}}>


        {trainers.map((trainer, index) => (
          <Trainers key={index} {...trainer} />
        ))}
      </div>
    </div>
    <div >
      <h4 className="text-center text-success fw-bold fs-5" >Break Fast</h4>
      <Schedule meal={breakfast} time="10:00 am" />
      <Schedule meal={blueberry} time="10:00 am" />
    </div>
       
        </div>
       
      </main>
      </div>
      <div style={{backgroundColor:"lightgray"}}>
        <ProfileModal></ProfileModal>
       
      </div>
      </div>
    </div>
  );
};

export default Dashboard;


