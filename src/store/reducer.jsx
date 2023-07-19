export default function MainReducer(state, action) {
  // console.log(action);
  switch (action.type) {
    case "REMOVE":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };

    case "ADD":
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
}
