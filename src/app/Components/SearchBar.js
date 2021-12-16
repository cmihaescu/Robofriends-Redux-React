import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  searchField,
  searchCriteria,
  filteredRobotsAction,
  fetchRobots,
} from "../../features/counter/counterSlice";
import "./SearchBar.css";

const Robots = () => {
  const dispatch = useDispatch();
  const robots = useSelector((state) => state.counter.robots);
  const stateSearchCriteria = useSelector(
    (state) => state.counter.searchCriteria
  );

  useEffect(() => {
    async function fetchData() {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          dispatch(fetchRobots(data));
          dispatch(filteredRobotsAction(data));
        });
    }
    fetchData();
  }, []);

  const getFilteredRobots = (searchString) => {
    if (robots) {
      let filteredRobots = robots.filter((robot) => {
       if(stateSearchCriteria==='catchphrase') 
       {return robot.company.catchPhrase.toLowerCase().includes(searchString.toLowerCase())}
       else {return robot[stateSearchCriteria].toLowerCase().includes(searchString.toLowerCase())}
      });
      dispatch(filteredRobotsAction(filteredRobots));
    } else {
      console.log("no robots");
    }
  };

  return (
    <div className="searchBar">
      Search robot by{" "}
      <select
        onChange={(e) => {
          dispatch(searchCriteria(e.target.value));
        }}
      >
        <option>Name</option>
        <option>Email</option>
        <option>Catchphrase</option>
      </select>{" "}
      <input
        type="search"
        onChange={(e) => {
          dispatch(searchField(e.target.value));
          getFilteredRobots(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default Robots;
