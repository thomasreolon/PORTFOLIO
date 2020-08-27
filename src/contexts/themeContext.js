import React, { createContext, useReducer, useContext } from "react"

const initialState = {
  darkMode: true,
}

/////////////////////////// REDUCER ////////////////////////////////////

function reducer(state, action) {
  const prev = state.darkMode
  switch (action.type) {
    case "TOGGLE_THEME":
      return { darkMode: !prev }

    default:
      return { darkMode: !prev }
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
