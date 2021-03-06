import { createWrapper, HYDRATE } from "next-redux-wrapper"
import { createStore } from "redux"
import { devToolsEnhancer } from "redux-devtools-extension"

const initialState = {
  user: {
    id: 1,
    name: "Ivan Danylenko",
    email: "danylenko.ivan11@gmail.com",
    isAuthenticated: true,
  },
  // Test property
  count: 1,
}

export const actionTypes = {
  AUTH: "AUTH",
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      }
    case actionTypes.AUTH:
      return {
        ...state,
        user: {
          ...action.user,
          isAuthenticated: action.authenticated,
        },
      }
    case HYDRATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

// ACTIONS
export const signin = (user) => {
  return {
    type: actionTypes.AUTH,
    authenticated: true,
    user,
  }
}

export const signout = () => {
  return { type: actionTypes.AUTH, authenticated: false, user: {} }
}

const makeStore = () => createStore(reducer, initialState, devToolsEnhancer())

export const wrapper = createWrapper(makeStore)
