import "./Dashboard.scss";

import dog1 from "../assets/dog/0.jpg";
import dog2 from "../assets/dog/1.webp";
import dog3 from "../assets/dog/2.avif";
import dog4 from "../assets/dog/3.webp";
import { IoEyeSharp } from "react-icons/io5";

const Dashboard = () => {
  const dogs = [
    {
      img: dog1,
      name: "Ben Kingsley",
      breed: "French Bulldog",
      vaccinationName: "Kennel Cough",
      vaccinationDate: "02 July, 2024",
      expiryDate: "02 July, 2026",
      status: null,
    },
    {
      img: dog2,
      name: "Jamie Foxx",
      breed: "Chihuahua",
      vaccinationName: "Kennel Cough",
      vaccinationDate: "02 July, 2024",
      expiryDate: "02 July, 2026",
      status: null,
    },
    {
      img: dog3,
      name: "Kirk Douglas",
      breed: "Rottweiler",
      vaccinationName: "Kennel Cough",
      vaccinationDate: "02 July, 2024",
      expiryDate: "02 July, 2026",
      status: null,
    },
    {
      img: dog4,
      name: "Michelle Visage",
      breed: "Poodle",
      vaccinationName: "Kennel Cough",
      vaccinationDate: "02 July, 2024",
      expiryDate: "02 July, 2026",
      status: null,
    },
    {
      img: dog4,
      name: "Michelle Visage",
      breed: "Poodle",
      vaccinationName: "Kennel Cough",
      vaccinationDate: "02 July, 2024",
      expiryDate: "02 July, 2026",
      status: null,
    },
    {
      img: dog4,
      name: "Michelle Visage",
      breed: "Poodle",
      vaccinationName: "Kennel Cough",
      vaccinationDate: "02 July, 2024",
      expiryDate: "02 July, 2026",
      status: null,
    },
  ];

  return (
    <div className="dashboard">
      {dogs.map((dog, index) => (
        <div className="dog-card" key={index}>
          <div className="dog-info">
            <div
              className="dog-img"
              style={{ backgroundImage: `url(${dog.img})` }}
            ></div>
            <div className="dog-details">
              <div className="up">
                <p className="dog-name">{dog.name}</p>
                <p className="dog-breed">{dog.breed}</p>
              </div>
              <button className="view-certificate-logic">
                View Certificate
                <IoEyeSharp className="icons" />
              </button>

              <div className="down">
                <p className="dog-name">Document Approvals</p>
                <p className="dog-breed">kenncl cough</p>
              </div>
            </div>
          </div>

          <div className="date-lock">
            <p>Vaccination Date</p>
            <span>{dog.vaccinationDate}</span>
          </div>
          <div className="date-lock">
            <p>Expiry Vaccination Date</p>
            <span>{dog.expiryDate}</span>
          </div>

          <div className="dates">
            <div className={"date alaing-date"}>
              <p>Vaccination Date</p>
              <span>{dog.vaccinationDate}</span>
            </div>
            <div className="date">
              <p>Expiry Date</p>
              <span>{dog.expiryDate}</span>
            </div>
          </div>

          <div className="actions">
            <div style={{ display: "flex", gap: "10px" }}>
              <button className="approve">Approval</button>
              <button className="decline">Decline</button>
            </div>

            <button className="view-certificate">
              View Certificate
              <IoEyeSharp className="icons" />
            </button>
          </div>
        </div>
      ))}

     <span style={{height: '100px'}}></span>
    </div>
  );
};

export default Dashboard;
