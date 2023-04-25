"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type StateType = {
  isOpen: boolean;
};

type ActionType = {
  type: string;
};

const initialState: StateType = {
  isOpen: false,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, isOpen: !state.isOpen };
    case "CLOSE":
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

export const HeaderContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const HeaderContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <HeaderContext.Provider value={{ state, dispatch }}>
      {children}
    </HeaderContext.Provider>
  );
};
