export const loadPeople = (peopleData) => ({
  type: "people",
  payload: {
    people: peopleData,
  },
});

export const applyFilter = (filterName) => ({
  type: "filter",
  payload: {
    filter: filterName,
  },
});
