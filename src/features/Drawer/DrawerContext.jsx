import { createContext, useContext, useReducer } from "react";

const Context = createContext();

const initialState = {
  isOpen: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "closeDrawer":
      return { ...state, isOpen: false };
    case "toggleDrawer":
      return { ...state, isOpen: !state.isOpen };
    default:
      return { ...state };
  }
}

const DrawerContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isOpen } = state;

  return (
    <Context.Provider value={{ isOpen, dispatch }}>{children}</Context.Provider>
  );
};

function useDrawerState() {
  const con = useContext(Context);
  return con;
}

export { DrawerContext, useDrawerState };
