import React, { createContext, useReducer, useContext } from "react";

const initialState = {
  userType: null,
  user: null,
};

/////////////////////////// REDUCER ////////////////////////////////////

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };

    default:
      return state;
  }
}

//////////////////////////////// CONTEXT ///////////////////////////////////////

// User - context data
const Context = createContext();

const withContext = (Component) => {
  const ContextComponent = (props) => (
    <Context.Provider value={useReducer(reducer, initialState)}>
      <Component {...props} />
    </Context.Provider>
  );

  return ContextComponent;
};

//////////////////////////////// EXPORT ////////////////////////////////////////

export default {
  withContext: withContext,
  useContext: () => useContext(Context),
};
