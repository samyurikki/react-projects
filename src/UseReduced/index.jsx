import React, { useReducer } from "react";
import { data } from "../Data/data";

const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "RESET_LIST";
const REMOVE_ITEM = "REMOVE_LIST";

const defaultState = {
  people: data,
  isLoading: false,
};

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  } else if (action.type === RESET_LIST) {
    return { ...state, people: data };
  } else if (action.type === REMOVE_ITEM) {
    const newPeople = state.people.filter((each) => each.id !== action.id);
    return { ...state, people: newPeople };
  }
  throw new Error(`No matching "${action.type}" action type`);
};

const ReducerBasics = () => {
  const [state, dispatcher] = useReducer(reducer, defaultState);

  //const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    dispatcher({ type: REMOVE_ITEM, id });
  };

  const clearList = () => {
    dispatcher({ type: CLEAR_LIST });
  };

  const resetPeople = () => {
    dispatcher({ type: RESET_LIST });
    // setPeople(data);
  };
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetPeople}
        >
          Reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
