export const FILTER_MAP = {
  EveryOne: () => true,
  Male: (people) => people.gender === "male",
  Female: (people) => people.gender === "female",
  Over30: (people) => people.age >= 30,
  Under30: (people) => people.age < 30,
};
export const FILTER_NAMES = Object.keys(FILTER_MAP);

const initialState = {
  people: [],
  filters: [],
  filteredPeople: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "people":
      return {
        ...initialState,
        people: action.payload.people,
        filteredPeople: action.payload.people,
      };
    case "filter":
      if (action.payload.filter === "EveryOne") {
        return {
          ...state,
          filters: [action.payload.filter],
          filteredPeople: state.people,
        };
      } else {
        return {
          ...state,
          filters: Array.from(
            new Set([...state.filters, action.payload.filter])
          ),
          filteredPeople: state.filteredPeople.filter(
            FILTER_MAP[action.payload.filter]
          ),
        };
      }
    default:
      return state;
  }
}
