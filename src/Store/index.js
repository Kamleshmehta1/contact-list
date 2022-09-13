import { createStore } from "redux";

const initialState = {
  toggle: localStorage.getItem("logged") ? true : false,
  user: "",
};

const reducerFn = (state = initialState, action) => {
  // Synchronous Function
  //   We must not mutate the original state
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        toggle: action.toggle,
      };
    case "USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

const store = createStore(reducerFn);
export default store;
