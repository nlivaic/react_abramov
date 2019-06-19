/*****************************
 * This reducer was used previously, while the todos were created locally.
 * When we started fetching todos from API, the actions below were not
 * performed anymore on the client.
 *****************************/
// const todo = (state = {}, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return {
//         id: action.id,
//         text: action.text,
//         completed: false
//       };
//     case "TOGGLE_TODO":
//       if (state.id !== action.id) {
//         return state;
//       }
//       return { ...state, completed: !state.completed };
//     default:
//       return state;
//   }
// };

// export default todo;
