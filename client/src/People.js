import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FILTER_NAMES, loadPeople } from './store';

import FilterButton from './FilterButton';

function People() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3300/api');
      const { people } = await res.json();
      dispatch(loadPeople(people));
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton key={name} name={name} />
  ));
  const appliedFilters = useSelector((state) => state.filters).join(' and ');

  const filteredPeople = useSelector((state) => state.filteredPeople);

  const peopleList =
    filteredPeople &&
    filteredPeople.map((people) => (
      <tr>
        <td>{people.name}</td>
        <td>{people.age}</td>
        <td>{people.gender}</td>
      </tr>
    ));

  return (
    <div>
      <h2>People</h2>
      {loading ? (
        'Loading...'
      ) : (
        <div>
          {filterList}
          <br />
          <h5>Applied Filters: {appliedFilters}</h5>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>{peopleList}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default People;
