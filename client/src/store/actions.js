export const LOAD_PEOPLE_ACTION = 'query/load-people';
export const APPLY_FILTER_ACTION = 'query/apply-filter';

export const loadPeople = (peopleData) => ({
  type: LOAD_PEOPLE_ACTION,
  payload: {
    people: peopleData,
  },
});

export const applyFilter = (filterName) => ({
  type: APPLY_FILTER_ACTION,
  payload: {
    filter: filterName,
  },
});
