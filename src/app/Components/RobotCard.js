import React from "react";
import "./RobotCard.css";

const Robot = ({ id, name, email, catchPhrase }) => {
  return (
    <div>
      <div className='card tc dib br3 pa1 ma2 grow bw2 shadow-5'>
        <img src={`https://robohash.org/${id}`} alt="roboface"></img>
        <div className='cardDetails'>
          <li><strong>Name: </strong>{name}</li>
          <li><strong>Email: </strong>{email}</li>
          <li><strong>Catchphrase: </strong> {catchPhrase}</li>
        </div>
      </div>
    </div>
  );
};

export default Robot;
