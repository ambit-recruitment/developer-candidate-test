import React, { useState, useEffect } from "react";

function People() {
  const [peopleData, setPeopleData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3300/api");
      const { people } = await res.json();
      setPeopleData(people);
      setLoading(false);
    };

    fetchData();
  }, []);

  const display = peopleData.map((people) => (
    <li key={people._id}>
      {people.name}-{people.age}-{people.gender}
    </li>
  ));
  return <div>{loading ? "Loading" : <ul> {display} </ul>}</div>;
}

export default People;
