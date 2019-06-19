const byId = (state = {}, action) => {
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.todos
    };
  } else {
    return state;
  }
};

export default byId;

// Selector method.
export const getTodo = (state, id) => state[id];
