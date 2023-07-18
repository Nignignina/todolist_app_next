// const [state, dispatch] = useReducer(reducer, initialArg, init?)
import { initialState } from "./MainContext";

function reducer(state, action) {
  switch (action.type) {
    case "REMOVE":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
}
