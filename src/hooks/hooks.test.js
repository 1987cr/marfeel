import { useReducer } from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { sectionReducer, initialState, ACTION, STATUS } from "./useSection";
import { mergeConfig, defaultConfig } from "./useConfig";

describe("useSection: Section reducer", () => {
  it("throws if unknown action type is dispatched", () => {
    const { result } = renderHook(() =>
      useReducer(sectionReducer, initialState)
    );
    const [, dispatch] = result.current;

    const actionType = "INCREMENT";

    act(() => {
      dispatch({ type: actionType });
    });

    expect(result.error).toEqual(Error(`Unhandled action type: ${actionType}`));
  });

  it("status is set to 'loading' when fetch starts", () => {
    const { result } = renderHook(() =>
      useReducer(sectionReducer, initialState)
    );
    const [, dispatch] = result.current;

    act(() => {
      dispatch({ type: ACTION.FETCH_START });
    });

    const [state] = result.current;
    expect(state.status).toEqual(STATUS.LOADING);
  });

  it("status is set to 'error' when fetch fails", () => {
    const { result } = renderHook(() =>
      useReducer(sectionReducer, initialState)
    );
    const [, dispatch] = result.current;

    act(() => {
      dispatch({ type: ACTION.FETCH_FAIL });
    });

    const [state] = result.current;
    expect(state.status).toEqual(STATUS.ERROR);
  });

  it("articles are assigned to the correct list after fetch", () => {
    const { result } = renderHook(() =>
      useReducer(sectionReducer, initialState)
    );
    const [, dispatch] = result.current;

    const selected = "politics";
    const articles = [
      {
        id: 1,
        title: "Title 1",
        description: "Description 1"
      },
      {
        id: 1,
        title: "Title 2",
        description: "Description 2"
      }
    ];

    act(() => {
      dispatch({ type: ACTION.SET_SELECTED, payload: selected });
      dispatch({ type: ACTION.FETCH_SUCCESS, payload: articles });
    });

    const [state] = result.current;
    expect(state.selected).toEqual(selected);
    expect(state.articles[selected].length).toEqual(articles.length);
  });
});

describe("useConfig: Merge config", () => {
  it("result matchs snapshot", () => {
    const remoteConfig = {
      header: {
        background: "#000"
      },
      burger: {
        color: "#fff"
      },
      section: {
        size: 16,
        color: "#fff"
      },
      tabs: {
        technology: "Technology"
      }
    };
    const resultConfig = mergeConfig(defaultConfig, remoteConfig);
    expect(resultConfig).toMatchSnapshot();
  });
});
