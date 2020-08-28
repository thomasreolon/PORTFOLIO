import React, { createContext, useReducer, useContext } from "react"

const initialState = {
  hasSeenPopup: false,
}

/////////////////////////// REDUCER ////////////////////////////////////

function reducer(state, action) {
  switch (action.type) {
    case "SEEN":
      return { ...state, hasSeenPopup: true }

    default:
      return state
  }
}

//////////////////////////////// CONTEXT ///////////////////////////////////////

// User - context data
const Context = createContext()

const withContext = Component => {
  const ContextComponent = props => (
    <Context.Provider value={useReducer(reducer, initialState)}>
      <Component {...props} />
    </Context.Provider>
  )

  return ContextComponent
}

//////////////////////////////// EXPORT ////////////////////////////////////////

export default {
  withContext: withContext,
  useContext: () => useContext(Context),
}
