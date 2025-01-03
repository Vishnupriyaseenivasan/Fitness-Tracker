import React from "react";

const Trainers = ({ image, name, title, badgeCount, starCount, profilePicture }) => {
  return (
    <div className="col-md-6">
      <div className="card p-2">
        <img
          src={image}
          className="card-img-top"
          alt={`${name} banner`}
          style={{ height: "150px", objectFit: "cover", position:'relative',borderRadius:'5px', boxShadow:'2px 2px 2px solid black'}}
        />
        <div className="card-body text-center">
          <img
            src={profilePicture}
            alt={`${name} profile`}
            className="rounded-circle "
            style={{ width: "60px", height: "60px", objectFit: "cover", border: "2px solid #ddd",position:'absolute', top:'120px', left:'30px' }}
          />
          <h5 className="card-title mt-2">{name}</h5>
          <p className="card-text text-muted">{title}</p>
          <div className="d-flex justify-content-center">
            <div className="me-3 mt-2">
              <i className="bi bi-award-fill " style={{ color: "gold" }}></i> {badgeCount}
            </div>
            <div className="me-3 mt-2">
              <i className="bi bi-star-fill" style={{ color: "gold" }}></i> {starCount}
            </div>
          <button className="btn text-secondary">View Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainers;