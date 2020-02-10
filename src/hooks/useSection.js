// src/section-context.js
import React from "react";
import api from "api";

const SectionStateContext = React.createContext();
const SectionDispatchContext = React.createContext();

export const STATUS = {
  LOADING: "loading",
  ERROR: "error",
  OK: "ok"
};

export const ACTION = {
  FETCH_START: "fetchStart",
  FETCH_SUCCESS: "fetchSuccess",
  FETCH_FAIL: "fetchFail",
  SET_SELECTED: "setSelected"
};

export const sectionReducer = (state, action) => {
  switch (action.type) {
    case ACTION.FETCH_START: {
      return {
        ...state,
        status: STATUS.LOADING
      };
    }
    case ACTION.FETCH_SUCCESS: {
      const articles = action.payload;

      return {
        ...state,
        status: STATUS.OK,
        articles: {
          ...state.articles,
          [state.selected]: articles
        }
      };
    }
    case ACTION.FETCH_FAIL: {
      return {
        ...state,
        status: STATUS.ERROR
      };
    }
    case ACTION.SET_SELECTED: {
      const selected = action.payload;

      return {
        ...state,
        selected
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const initialState = {
  status: STATUS.OK,
  articles: {
    home: [],
    politics: [],
    sports: [],
    national: [],
    technology: []
  },
  selected: "home"
};

export const SectionProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(sectionReducer, initialState);

  const fetchSection = async section => {
    dispatch({ type: ACTION.FETCH_START });
    try {
      const articles = await api.fetchSection(section);
      dispatch({ type: ACTION.FETCH_SUCCESS, payload: articles });
    } catch {
      dispatch({ type: ACTION.FETCH_ERROR });
    }
  };

  const setSelected = section =>
    dispatch({ type: ACTION.SET_SELECTED, payload: section });

  const actions = { fetchSection, setSelected };

  return (
    <SectionStateContext.Provider value={state}>
      <SectionDispatchContext.Provider value={actions}>
        {children}
      </SectionDispatchContext.Provider>
    </SectionStateContext.Provider>
  );
};

const useSectionState = () => {
  const context = React.useContext(SectionStateContext);
  if (context === undefined) {
    throw new Error("useSectionState must be used within a SectionProvider");
  }
  return context;
};

const useSectionDispatch = () => {
  const context = React.useContext(SectionDispatchContext);
  if (context === undefined) {
    throw new Error("useSectionDispatch must be used within a SectionProvider");
  }
  return context;
};

const useSection = () => [useSectionState(), useSectionDispatch()];

export default useSection;
