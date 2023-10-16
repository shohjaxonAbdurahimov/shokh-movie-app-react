import { createContext, useEffect, useMemo } from "react";
import { useReducer } from "react";


export const ThemeProvider = createContext()
function sateFromLocalStorage() {
  return JSON.parse(localStorage.getItem("state")) || {
    color: "#161D2F",
    theme: "light"
  }
}



export function ThemeContextProvider({ children }) {

  const updateState = (state, action) => {
    switch (action.type) {
      case "CHANGE_COLOR":
        return { ...state, color: action.payload }
      case "CHANGE_THEME":
        return { ...state, theme: action.payload }
      default: return state
    }
  }

  const [state, dispatch] = useReducer(updateState, sateFromLocalStorage())
  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color })
  }
  const changeTheme = (theme) => {
    dispatch({ type: "CHANGE_THEME", payload: theme })
  }
  const newState = useMemo(() => {
    return state
  })

  useEffect(() => {
    localStorage.setItem('state',JSON.stringify( newState ))
  document.documentElement.setAttribute('data-theme', sateFromLocalStorage().theme )

  }, [newState])


  return <ThemeProvider.Provider value={{ ...state, changeColor, changeTheme }}>
    {children}
  </ThemeProvider.Provider>
}