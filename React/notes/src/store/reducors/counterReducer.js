const initialState = { count: 0 };

export default function counterReducer(state = initialState, action) {
  if (action.type == "counter/increment") {
    return { ...state, count: state.count + action.payload.amount };
  }

  if (action.type == "counter/decrement") {
    return { ...state, count: state.count - action.payload.amount };
  }

  return state;
}
