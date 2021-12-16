import React from "react";
import { useSelector} from "react-redux";
import Robot from "./RobotCard";
import "./Robots.css";

const Robots = () => {
  const stateFilteredRobots = useSelector(
    (state) => state.counter.filteredRobots
  );
  
  return (
    <div className="robotsList">
      {stateFilteredRobots.map((robot, i) => (
        <Robot
          key={i}
          id={robot.id}
          name={robot.name}
          email={robot.email}
          catchPhrase={robot.company.catchPhrase}
        />
      ))}
    </div>
  );
};

export default Robots;
