import React, { useState, useEffect } from "react";

import FilterButton from "./FilterButton";

const FILTER_MAP = {
  EveryOne: () => true,
  Male: (people) => people.gender === "male",
  Female: (people) => people.gender === "female",
  Over30: (people) => people.age >= 30,
  Under30: (people) => people.age < 30,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function People() {
  const [peopleData, setPeopleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("EveryOne");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3300/api");
      const { people } = await res.json();
      setPeopleData(people);
      setLoading(false);
    };

    fetchData();
  }, []);

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  const appliedFilter = <h5>Applied Filter: {filter}</h5>;

  const peopleList = peopleData.filter(FILTER_MAP[filter]).map((people) => (
    <tr>
      <td>{people.name}</td>
      <td>{people.gender}</td>
      <td>{people.age}</td>
    </tr>
  ));

  return (
    <div>
      <h2>People</h2>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          {filterList}
          <br />
          {appliedFilter}
          <table>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
            </tr>
            {peopleList}
          </table>
        </div>
      )}
    </div>
  );
}

export default People;
