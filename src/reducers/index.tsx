import { ADD } from "../actions";

let storeState = {
  counter: 1,
};

function reduce(state = storeState, action: any) {
  switch (action.type) {
    case ADD:
      return { counter: state.counter + 1 };

    default:
      return state;
  }
}

export default reduce;
